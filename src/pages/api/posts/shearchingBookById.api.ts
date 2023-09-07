import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";
import { ratings } from "../../../../prisma/constants/ratings";

export default async function shearchingBookById(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method != "GET") {
        return res.status(405).end()
    }

    const detailsBook = await prisma.book.findMany({
        where: {
            id: String(req.query.id)
        },
        include: {
            categories: {
                include: {
                    category: true
                }
            },
            ratings: {
                include: {
                    user: true
                }
            },
        }
    })

    let category = detailsBook[0].categories.reduce((red, e, i, arr) => {
        
        if(arr.length >= 0) {
            red += `${e.category.name} `
        } else {
            red = `${e.category.name}`
        }

        return red
    }, "")

    const z = detailsBook.map(details => ({
        ...details,
        category: category,
        rate: Math.round(details.ratings.reduce((red, e) => {
            red += e.rate
            return red
        }, 0) / (details.ratings.length + 1)),
        created_at: details.created_at.toLocaleDateString("pt-Br", {
            year: 'numeric',
            day: "numeric",
            month: "long"
        }),
        ratings: details.ratings.map(rating => ({
            ...rating,
            created_at: rating.created_at.toLocaleDateString("pt-BR", {
                year: "numeric",
                day: "numeric",
                month: "long",
            })
        }))
    }))

    return res.json(z)
}