import { StarList } from "@/components/Stars/intex";
import Image from "next/image";
import { Container, Title } from "./style";

interface UserCardAvalibleProps {
    image: string,
    title: string,
    author: string,
    description: string,
    rate: number
}

export function UserCardAvalible({image, title, author, description, rate}: UserCardAvalibleProps) {
    return (
        <Container>
            <header>
                <Image 
                    src={image} 
                    width={98}
                    height={134}
                />
                <div>
                    <Title>
                        <h2>{title}</h2>
                        <span>{author}</span>
                    </Title>
                    <StarList ratingStar={rate}/>
                </div>
            </header>
            <div>
                <p>{description}</p>
            </div>
        </Container>
    )
}