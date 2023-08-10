import libIcon from "../../assets/lib-icon.svg"
import Image from "next/image";
import Link from "next/link";
import { Container, Menu } from "./style";
import { ChartLineUp, Binoculars, User, SignIn, SignOut } from "phosphor-react";
import { signOut, useSession } from "next-auth/react";
import { Avatar } from "@/components/Avatar";
import { CardReviewBook, CardReviewBookProps } from "@/components/cardReviewBook";
import {prisma} from "../../../lib/prisma";
import { useEffect } from "react"
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
    const posts = await prisma.book.findMany()
  
    posts.forEach(e => {
        e.created_at = String(e.created_at)
    })
    
    return { 
        props: { 
            posts, 
        }
    }
}

export default function Home({posts}) {

    const { data: session } = useSession()
    console.log(posts)



    return (
        <Container>
            <Menu>
                <Link 
                    href="/"
                >
                    <Image 
                        src={libIcon}
                        alt=""/>
                    <p>BookWise</p>
                </Link>

                <nav>
                    <Link href="#"

                    ><ChartLineUp />Início</Link>
                    <Link href="#"><Binoculars/>Explorar</Link>
                    {session && <Link href="#"><User/>Perfil</Link>}
                </nav>

                <div>
                    {!session 
                        ?  
                            <button>
                                Fazer Login
                                <SignIn color="#50B2C0"/>
                            </button>
                        : 
                        <button onClick={() => signOut()}>
                            <Avatar src={session.user.image}/>
                            {session.user.name}
                            <SignOut color="#F75A68"/>
                        </button>
                    }
                </div>
            </Menu>
            <section>
                <h2>
                    <ChartLineUp color="#50B2C0"/>
                    Inicio
                </h2>

                <span>
                    Avaliações mais recentes
                </span>

                <div>
                    {posts.map(item => {
                        return (
                            <CardReviewBook 
                                // profilename={}
                                date={item.created_at}
                                image={item.cover_url}
                                author={item.author}
                                booktitle={item.name}
                                resume={item.summary}
                                key={item.id}
                            />
                        )
                    })}
                    {/* <CardReviewBook /> */}
                </div>
            </section>
            <article>

            </article>
        </Container>
    )
}