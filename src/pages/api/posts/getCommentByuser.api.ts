import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
    req: NextApiRequest, 
    res: NextApiResponse
) {
    if (req.method != "GET") {
        return res.status(405).end()
    }

    const id = String(req.query.userId)
    const ratingsByid = await prisma.rating.findMany({
        where: {
            user: {
                id
            }
        },
        include: {
            user: true,
            book: true,
        }
    })

    return res.json(ratingsByid)
}