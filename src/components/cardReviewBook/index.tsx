import Image from "next/image";
import exemple from "/public/images/books/Book.png"
import { Avatar } from "../Avatar";
import { StarList } from "../Stars/intex";
import { Container, Content, HeaderAvaliation, HeaderProfile, StarContainer } from "./style";

export interface CardReviewBookProps {
    profileavatar: string,
    profilename: string
    date: string
    image: string
    booktitle: string
    author: string
    resume: string
    rate: number
}

export function CardReviewBook({ date, rate, image, booktitle, author, resume, profilename, profileavatar}: CardReviewBookProps) {

    return (
        <Container>
            <HeaderAvaliation>
                <Avatar src={profileavatar}/>
                <HeaderProfile>
                    <h3>{profilename}</h3>
                    <span>{date}</span>
                </HeaderProfile>
                <StarContainer>
                    <StarList ratingStar={rate}/>
                </StarContainer>
            </HeaderAvaliation>
            <Content>
                <Image 
                    width={108}
                    height={152}
                    alt="picture"
                    src={image}
                />
                <div>
                    <div>
                        <h3>{booktitle}</h3>
                        <span>{author}</span>
                    </div>

                    <div>
                        <p>{resume}</p>
                    </div>

                </div>
            </Content>
        </Container>
    )
}