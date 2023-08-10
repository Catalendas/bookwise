import Image  from 'next/image'
import { useSession, signIn } from 'next-auth/react'
import { ButtonContainer, Container, HeadingContainer, ImageContainer, LoginContainer } from './style'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading/style'

import homeImage from '../../assets/image.png'
import GoogleIcon from '../../assets/google-icon.svg'
import GitHubIcon from '../../assets/github-icon.svg'
import RocketLaunchIcon from '../../assets/rocketLaunch-icon.svg'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


export default function Login() {

    const session = useSession()
    const router = useRouter()
    const isSignedIn = session.status == "authenticated"

    useEffect(() => {
        if (isSignedIn) {
            router.push("/home")
        }
    }, [session])

    return (
        <Container>
            <ImageContainer>
                <Image
                    src={homeImage}
                    quality={100}
                    priority
                    alt='Book wise'
                />
            </ImageContainer>
            <LoginContainer>
                <div>

                    <HeadingContainer>
                        <Heading>
                            Boas vindas!
                        </Heading>
                        <p>Faça seu login ou acesse como visitante.</p>
                    </HeadingContainer>

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
                        <Button 
                            size="lg"
                            disabled={isSignedIn}
                            title='Acessar como visitante'
                            icon={
                                <Image
                                    alt=''
                                    src={RocketLaunchIcon}
                                />
                            }
                        />
                    </ButtonContainer>
                </div>
            </LoginContainer>
        </Container>
    )
}