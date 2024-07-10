import BiryaniData from "@/models/BiryaniData";
import db from "@/utils/db";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            await db.connect();
            const data = await BiryaniData.find({});
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal server error" });
        } finally {
            await db.disconnect();
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
