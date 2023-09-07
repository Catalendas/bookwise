import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
    req: NextApiRequest, 
    res: NextApiResponse
) {
    if (req.method != "GET") {
        return res.status(405).end()
    }

    const rating = await prisma.rating.findMany({
        include: {
            book: true,
            user: true,
        }
    })

    const mappedRating = rating.map(rating => ({
        ...rating,
        created_at: rating.created_at.toLocaleDateString("pt-BR", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
    }))

    return res.json({ mappedRating })

}