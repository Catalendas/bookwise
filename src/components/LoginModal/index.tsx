import * as Dialog from '@radix-ui/react-alert-dialog'
import Image from 'next/image'
import GoogleIcon from '../../assets/google-icon.svg'
import GitHubIcon from '../../assets/github-icon.svg'
import { Button } from '../Button'
import { ButtonContainer, CloseButton, Content, Overlay } from './style'
import { useSession, signIn } from 'next-auth/react'
import { X } from 'phosphor-react'

export function LoginModal() {

    const session = useSession()
    const isSignedIn = session.status == "authenticated"

    return (
        <Dialog.Portal>
            <Overlay/>

            <Content>

                <CloseButton>
                    <X color="#8D95AF" size={24}/>
                </CloseButton>

                <div>
                    <strong>Faça login para deixar sua avaliação</strong>
                </div>
                <ButtonContainer>
                    <Button 
                        size="lg"
                        title="Entrar com o Google" 
                        icon={
                            <Image
                                alt=''
                                src={GoogleIcon}
                            />
                        }
                        onClick={() => signIn('google')}
                        disabled={isSignedIn}
                    />
                    <Button 
                        size="lg"
                        title='Entrar com GitHub'
                        icon={
                            <Image
                                alt=''
                                src={GitHubIcon}
                            />
                        }
                        onClick={() => signIn('github')}
                        disabled={isSignedIn}
                    />
                </ButtonContainer>
            </Content>
        </ Dialog.Portal>
    )
}