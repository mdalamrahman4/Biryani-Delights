import BiryaniData from "@/models/BiryaniData";
import db from "@/utils/db";
export default async function handler(req, res) {
    if(req.method==="DELETE"){
        await db.connect();
          try {
            const product = await BiryaniData.findByIdAndDelete(id);
            res.status(200).json(product);
          } catch (error) {
            console.log(error);
          }
        }
        await db.disconnect();
}
