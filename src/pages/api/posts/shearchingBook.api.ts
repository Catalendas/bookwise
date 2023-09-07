import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
    req: NextApiRequest, 
    res: NextApiResponse
) { 

    if (req.method != "GET") {
        return res.status(405).end()
    }

    const book = String(req.query.book)
    const category = String(req.query.category)

    let response 
    if (req.query.book || req.query.category) {
        response = await prisma.book.findMany({
            where: {
                OR: [
                    {         
                        name: {
                            contains: book
                        }
                    }, 
                    {
                        categories: {
                            some: {
                                category: {
                                    name: category
                                }
                            }
                        }
                    }
                ]
            },
    
            include: {
                ratings: true,
                categories: true,
            }
        })
    } else {
        response = await prisma.book.findMany({
            include: {
                ratings: true,
                categories: true,
            }
        })
    }

    let formated = response.map(items => ({
        ...items,
        rating: Math.round(items.ratings.reduce((red, e) => {
            red += e.rate
            return red
        }, 0) / (items.ratings.length + 1))
    }))

    return res.json(formated)
}