import { signOut, useSession } from "next-auth/react";
import * as Dialog from '@radix-ui/react-alert-dialog'
import Image from "next/image";
import Link from "next/link";
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from "phosphor-react";
import { Avatar } from "../Avatar";
import { MenuContainer } from "./style";
import libIcon from "../../assets/lib-icon.svg"
import { LoginModal } from "../LoginModal";

export function Menu() {

    const { data: session } = useSession()

    return (
        <MenuContainer>
                <Link 
                    href="/home"
                >
                    <Image 
                        src={libIcon}
                        alt=""/>
                    <p>BookWise</p>
                </Link>

                <nav>
                    <Link href="/home"
                    ><ChartLineUp />Início</Link>
                    <Link href="/explorer"><Binoculars/>Explorar</Link>
                    {session && <Link href={`/profile/${session.user.name}`}><User/>Perfil</Link>}
                </nav>

                <div>
                    {!session 
                        ? 
                            <Dialog.Root>
                                <Dialog.Trigger asChild>
                                    <button>
                                        Fazer Login
                                        <SignIn color="#50B2C0"/>
                                    </button>
                                </Dialog.Trigger>
                                <LoginModal />   
                            </Dialog.Root>
                        : 
                        <button onClick={() => signOut()}>
                            <Avatar src={session.user.image}/>
                            {session.user.name}
                            <SignOut color="#F75A68"/>
                        </button>
                    }
                </div>
            </MenuContainer>
    )
}