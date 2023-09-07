import { useSession } from "next-auth/react";
import Image from "next/image";
import * as Dialog from '@radix-ui/react-alert-dialog'
import { useState } from "react";
import { prisma } from "../../../lib/prisma";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { StarList } from "../Stars/intex";
import { SideComments } from "./SideComment";
import { AboutBook, Book, BookDetail, Commented, CommentedArea, Comments, CommentsContainer, CommentsTitle, SidePanelContainer } from "./style";
import { BookmarkSimple, BookOpen } from "phosphor-react";
import { LoginModal } from "../LoginModal";

interface SidePanelProps {
    bookId: string
    image: string
    title: string
    author: string
    rating: string
    rate: number
    category: string
    ratings: []
    pages: number
    sideFunction: boolean
}

export function SidePanel({bookId, rate, image, title, author, rating, ratings, category, pages, sideFunction}: SidePanelProps){

    const [newComment, setNewComment] = useState('')
    const [newRating, setNewRating] = useState(0)

    const session = useSession()
    let user 
    if (session.status == "authenticated") {
        user = session.data.user
    }
    const isSignedIn = session.status == "authenticated"

    async function commented() {
        event.preventDefault()
        await api.get("/posts/comment", {
            params: {
                email: user.email,
                description: newComment,
                rate: newRating,
                bookId
            }
        }).then(response => console.log(response))

        setNewComment('')
        setNewRating(0)
    }

    return (
        <SidePanelContainer css={ sideFunction ? {diplay: 'flex'} : {display: 'none'}}>
            <BookDetail>
                <Book>
                    <Image
                        src={image}
                        width={170}
                        height={242}
                    />

                    <div>
                        <div>
                            <h3>{title}</h3>
                            <span>{author}</span>
                        </div>

                        <div>
                            <StarList 
                                ratingStar={rate}
                            />
                            <span>{rating} avaliações</span>
                        </div>
                    </div>
                </Book>
                <AboutBook>
                    <div>
                        <BookmarkSimple color="#50B2C0" size={24}/>
                        <div>
                            <span>Categoria</span>
                            <strong>{category}</strong>
                        </div>
                    </div>
                    <div>
                        <BookOpen color="#50B2C0" size={24}/>
                        <div>
                            <span>Paginas</span>
                            <strong>{pages}</strong>
                        </div>
                    </div>
                </AboutBook>
            </BookDetail>
            <CommentsContainer>
                { isSignedIn ? 
                <Commented as="form" onSubmit={(e) => commented()}>
                    <div className="title">
                        <div>
                            <Avatar 
                                src={user.image}
                            />
                            <h2>{user.name}</h2>
                        </div>
                        <StarList 
                            onChange={(e) => setNewRating(e.target.value)}
                            ratingStar={newRating}
                        />
                    </div>
                    <CommentedArea>
                        <textarea
                            name="comment"
                            placeholder="Faça sua avaliação"
                            maxLength={450}
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        ></textarea>
                        <div>
                            <Button 
                                icon={<X size={24} color="#8381D9"/>}
                                size="sm"
                            />
                            <Button 
                                type="submit"
                                icon={<Check size={24} color="#50B2C0"/>}
                                size="sm"
                            />
                        </div>
                    </CommentedArea>
                </Commented>
                
                :<CommentsTitle>
                    <span>Avaliações</span>
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <button>Avaliar</button>    
                        </Dialog.Trigger>
                        <LoginModal />                        
                    </Dialog.Root>
                </CommentsTitle>}
                <Comments>
                    {ratings.map(rating => (
                        <SideComments
                            user={rating.user.name}
                            avatar={rating.user.image}
                            date={rating.created_at}
                            rating={rating.rate}
                            comment={rating.description}
                        />
                    ))}
                </Comments>
            </CommentsContainer>
        </SidePanelContainer>
    )
}