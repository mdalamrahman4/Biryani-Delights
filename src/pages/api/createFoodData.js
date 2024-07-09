import BiryaniData from "@/models/BiryaniData";
import db from "@/utils/db";
export default async function handler(req, res) {
    if(req.method === "POST"){
        await db.connect();
        try {
            let biryani=new BiryaniData({
                name:req.body.name,
                category:req.body.category,
                foodType:req.body.foodType,
                price:req.body.price,
                description:req.body.description,
                img:req.body.img
            });
            await biryani.save();
            res.status(200).json({ success: true});
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
        res.status(200).json({ data: "Done hai" });
    }
    db.disconnect();
}
