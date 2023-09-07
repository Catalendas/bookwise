import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../../lib/prisma"

export default async function handle(
    req: NextApiRequest, 
    res: NextApiResponse
) { 
    if (req.method != "GET") {
        return res.status(405).end()
    }


    const userId =  await prisma.user.findUnique({
        where: {
            email: String(req.query.email)
        }
    })

    const commented = await prisma.rating.create({
        data: {
            description: String(req.query.description),
            rate: Number(req.query.rate),
            user_id: userId.id,
            book_id: String(req.query.bookId),
            created_at: new Date()
        }
    })

    return res.json(userId)
}