import { Menu } from "@/components/Menu";
import { SearchExplorer } from "@/components/SearchExplorer";
import { GetStaticPaths, GetStaticProps } from "next";
import { User } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { prisma } from "../../../../lib/prisma";
import { SideProfile } from "./sideProfile";
import { HeaderProfileBooks, ProfileContainer, ProfileContent } from "./style";
import { UserCardAvalible } from "./userCardAvalible";

interface ProfileProps {
    user: {
        name: string,
        avatar: string,
        id: string
    }
}

export default function Profile({user}: ProfileProps) {
    
    const [ratings, setRatings] = useState([])
    const [ search, setSearch ] = useState('');

    console.log(ratings)
    useEffect(() => {
        api.get('/posts/getCommentByuser', {
            params: {
                userId: user.id
            }
        }).then(response => setRatings(response.data))
    }, [])

    const filteredItens = search.length > 0 ? 
        ratings.filter(item => item.book.name.includes(search)) 
        : ratings

    return (
        <ProfileContainer>
            <Menu/>

            <section>
                <HeaderProfileBooks>
                    <h2>
                        <User color="#50B2C0"/>
                        Perfil
                    </h2>

                    <SearchExplorer search={e => setSearch(e.target.value)}/>
                </HeaderProfileBooks>

                <ProfileContent>
                    {filteredItens.map(items => (
                        <UserCardAvalible 
                            key={items.id}
                            image={items.book.cover_url}
                            rate={items.rate}
                            title={items.book.name}
                            author={items.book.author}
                            description={items.description}
                        /> 
                    ))}
                </ProfileContent>
            </section>

            <SideProfile 
                name={user.name}
                avatar={user.avatar}
            />
        </ProfileContainer>
    )
}

export const getStaticPaths : GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const name = String(params?.user)

    const user = await prisma.user.findFirst({
        where: {
            name
        },
        include: {
            ratings: true,
        }
    })
        

    if(!user) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            user: {
                name: user.name,
                avatar: user.image,
                id: user.id
                // ratings: user.ratings,
            }
        },
        revalidate: 60 * 60 * 24 // 1 dia
    }
}