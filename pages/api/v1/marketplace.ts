// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getModel}  from "../../../utils/apis/mongo"



export default async (req:NextApiRequest, res:NextApiResponse) => {
    if (req.method?.toUpperCase() === "OPTIONS") {
        return res.status(204).end();
    }
    if (req.method?.toUpperCase() === "POST") {
        try {
            const marketplaceModel = await getModel("Listed");
            const result = await marketplaceModel.create(req.body);
            return res.status(200).json({ result });
            
        } catch (error) {
            console.log({ error });
            return res.status(500).json({ error: { message: "Unknown error." } });
        }
    }
    if (req.method?.toUpperCase() === "GET") {
        try {
            const nft = await getModel("Listed");
            const result = await nft.find({ visible: true }).sort({ updated_at: "desc" }).exec();
            return res.status(200).json({ result });
            
        } catch (error) {
            console.log({ error });
            return res.status(500).json({ error: { message: "Unknown error." } });
        }
    }
    if (req.method?.toUpperCase() === "PATCH") {
        try {
            
            const nft = await getModel("Listed");
            const result = await nft.updateOne({ tokenId: req.body.tokenId }, { $set: req.body });
            return res.status(200).json({ result });
            
        } catch (error) {
            console.log({ error });
            return res.status(500).json({ error: { message: "Unknown error." } });
        }
    }
}
