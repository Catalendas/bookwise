import { PopularBooksContainer } from "./style";
import Image from 'next/image'
import { StarList } from "../Stars/intex";

interface PopularCardBookProps {
    image: string
    cardTitle: string
    author: string
    rate: number
    size?: string 
    onclick: () => Promise<void>
}

export function PopularCardBook({image, cardTitle, author, rate, size, onclick}: PopularCardBookProps) {
    return (
        <PopularBooksContainer explorer={size} onClick={onclick}>
            <Image 
                src={image}
                alt=""
                width={64}
                height={94}
                quality={80}
            />
            <div>
                <div>
                    <h3>{cardTitle}</h3>
                    <span>{author}</span>
                </div>

                <StarList ratingStar={rate}/>
            </div>
        </PopularBooksContainer>
    )
}