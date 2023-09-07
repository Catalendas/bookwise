import { Avatar } from "@/components/Avatar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { BookmarkSimple, BookOpen, Books, UserList } from "phosphor-react";
import { useEffect } from "react";
import { Container, Title } from "./style";

interface SideProfileProps {
    name: string,
    avatar: string
}

export function SideProfile({name, avatar}: SideProfileProps) {

    const session = useSession()
    const router = useRouter()
    const isSignedIn = session.status == "authenticated"

    useEffect(() => {
        if (!isSignedIn) {
            router.push("/home")
        }
    }, [session])

    return (
        <Container>
            <header>
                <Avatar 
                    src={avatar}
                />
                <Title>
                    <h2>{name}</h2>
                    {/* <span>Qualquer</span> */}
                </Title>
            </header>
            <div>
                <div>
                    <BookOpen size={32} color="#50B2C0"/>
                    <div>
                        <h2>-</h2>
                        <span>Páginas lidas</span>
                    </div>
                </div>

                <div>
                    <Books size={32} color="#50B2C0"/>
                    <div>
                        <h2>-</h2>
                        <span>Livros avaliados</span>
                    </div>
                </div>

                <div>
                    <UserList size={32} color="#50B2C0"/>
                    <div>
                        <h2>-</h2>
                        <span>Autores lidos</span>
                    </div>
                </div>

                <div>
                    <BookmarkSimple size={32} color="#50B2C0"/>
                    <div>
                        <h2>-</h2>
                        <span>Categoria mais lida</span>
                    </div>
                </div>
            </div>
        </Container>
    )
}