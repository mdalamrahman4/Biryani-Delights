import BiryaniData from "@/models/BiryaniData";
import db from "@/utils/db";

export default async function handler(req, res) {
    if(req.method === "POST"){
        await db.connect();
        let data=await BiryaniData.findById(req.body.item);
        res.status(200).json({data});
    }
    db.disconnect();
}