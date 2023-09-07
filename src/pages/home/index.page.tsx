import { Container} from "./style";
import { ChartLineUp } from "phosphor-react";
import { CardReviewBook } from "@/components/cardReviewBook";
import { useEffect, useState } from "react"
import { api } from "../../../lib/axios";
import { PopularCardBook } from "@/components/PopularCardBooks";
import { Menu } from "@/components/Menu";


export default function Home() {
    
    const [ ratings, setRatings] = useState([])
    const [ ordeningRatings, setOrdeningsRatings ] = useState([])
    
    useEffect(() => {
        api.get('/posts/booksPost')
        .then((response) => {
            setRatings(response.data.mappedRating)
            setOrdeningsRatings(response.data.mappedRating.sort((a, b) => b.rate - a.rate).splice(0, 4))
        })
    }, [])
    

    return (
        <Container>
            <Menu />
            <section>
                <h2>
                    <ChartLineUp color="#50B2C0"/>
                    Inicio
                </h2>

                <span>
                    Avaliações mais recentes
                </span>

                <div>
                    {ratings.map(item => {
                        return (
                            <CardReviewBook 
                                rate={item.rate}
                                profileavatar={item.user.image}
                                profilename={item.user.name}
                                date={item.created_at}
                                image={item.book.cover_url}
                                author={item.book.author}
                                booktitle={item.book.name}
                                resume={item.description}
                                key={item.id}
                            />
                        )
                    })}
                </div>
            </section>
            <article>
                <span>
                    Livros populares
                </span>
                <div>
                    {ordeningRatings.map(ratings => {
                        return (
                            <PopularCardBook 
                                author={ratings.book.author}
                                cardTitle={ratings.book.name}
                                image={ratings.book.cover_url}
                                rate={ratings.rate}
                            />
                        )
                    })}
                </div>
            </article>
        </Container>
    )
}