import Users from "@/models/Users";
import db from "@/utils/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const jwtSecret = "eyJhbGciOiJIUzI1NiJ9.eyJoZWxsbyI6Im15aGVsbG8ifQ.5Os4S5s15uUOkQCnda-nM3lvEfJv4yDSkvi12pGu5HI";
export default async function handler(req,res){
    let success=false;
    if(req.method==="POST"){
        await db.connect();
        const {email,password}=req.body;
        try {
            let user=await Users.findOne({email});
            if(!user){
                return res.status(400).json({error:"User does not exist.Sign Up now to continue"});
            }
            const match=await bcrypt.compare(password,user.password);
            if(!match){
                return res.status(400).json({error:"Invalid Credentials! Please try again"});
            }
            const data = {
                user: {
                  id: user["_id"],
                },
              };
          const isAdmin = await user.isAdmin;
          const authToken = jwt.sign(data, jwtSecret);
          success = true;
          res.json({ success: success, authToken: authToken, isAdmin });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({error:"Internal Server Error"});
        }
    }
}