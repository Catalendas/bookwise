import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
    req: NextApiRequest, 
    res: NextApiResponse
) { 

    if (req.method != "GET") {
        return res.status(405).end()
    }

    const category = await prisma.category.findMany({
        include: {
            books: true,
        }
    })

    return res.json( category )

}