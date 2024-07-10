import BiryaniData from "@/models/BiryaniData";
import db from "@/utils/db";
export default async function handler(req, res) {
    if(req.method === "DELETE"){
        try {
            await db.connect();
            const {name}=req.body;
            await BiryaniData.deleteOne({name}).then((result)=>{
                res.status(200).json({message:"Item deleted successfully"});
            }).catch((err)=>{
                return res.status(400).json({error:"Could not delete the item"});
            });
        } catch (error) {
            console.log(error);
        }
        db.disconnect();
    }
}