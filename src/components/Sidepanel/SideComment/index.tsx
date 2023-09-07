import { Avatar } from "@/components/Avatar";
import { StarList } from "@/components/Stars/intex";
import { Content, Header, SideCommentContainer, SideTitle } from "./style";
interface SideCommentsProps {
    user: string
    date: string
    comment: string
    rating: number
    avatar: string
}

export function SideComments({user, date, comment, rating, avatar}: SideCommentsProps) {

    return (
        <SideCommentContainer>
           <Header>       
                <Avatar 
                    src={avatar}
                />
                <SideTitle>
                    <h3>{user}</h3>
                    <span>{date}</span>
                </SideTitle>
                <StarList ratingStar={rating}/>
            </Header> 
            <Content>
                <p>
                    {comment}
                </p>
            </Content>
        </SideCommentContainer>
    )
}