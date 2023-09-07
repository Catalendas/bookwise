import { CategoryCard } from "@/components/CategoryCard";
import { Menu } from "@/components/Menu";
import { PopularCardBook } from "@/components/PopularCardBooks";
import { SearchExplorer } from "@/components/SearchExplorer";
import { SidePanel } from "@/components/Sidepanel";
import { Binoculars } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";
import { ExplorerCategoryContainer, ExplorerContainer, ExplorerContent, ExplorerHead, ExplorerTitleContainer } from "./style";

export default function Explorer() {

    const [category, setCategory] = useState([])
    const [searchedItems, setSearchedItems] = useState([])
    const [ detailsBook, setDetailsBook ] = useState([])
    const [ search, setSearch] = useState('')
    const [sidebar, setSidebar] = useState(false)
    
    const showSidebar = () => setSidebar(!sidebar)
    
    useEffect(() => {
        api.get('/posts/booksCategory')
        .then((response) => setCategory(response.data))
        shearching()
    }, [])

    async function shearching(category?: string) {
        await api.get('/posts/shearchingBook', {
            params: {
                category: category,
            }
        })
        .then((response) => setSearchedItems(response.data))
    }

    async function sherchingById(id: string) {
        await api.get('/posts/shearchingBookById', {
            params: {
                id: id
            }
        })
        .then((response) => setDetailsBook(response.data))

        await showSidebar()
    }


    const filteredItens = search.length > 0 ?
        searchedItems.filter(item => item.name.includes(search))
        : searchedItems

    console.log(detailsBook)  
    return (
        <ExplorerContainer>
            <Menu/>

            <section onClick={() => setSidebar(false)}>
                <ExplorerHead>
                    <ExplorerTitleContainer>
                        <h2>
                            <Binoculars color="#50B2C0" />
                            Explorar
                        </h2>

                        <div>
                            <SearchExplorer search={e => setSearch(e.target.value)}/>
                        </div>
                    </ExplorerTitleContainer>

                    <ExplorerCategoryContainer>
                        <CategoryCard click={e => shearching('')}>
                            Todos
                        </CategoryCard>
                        {category.map(category => {
                            return (
                            <CategoryCard key={category.id} click={e => shearching(e.target.textContent)}>
                                {category.name}
                            </CategoryCard>
                            )
                        })}
                    </ExplorerCategoryContainer>
                </ExplorerHead>
                <ExplorerContent>
                    {filteredItens.map(items => {
                        return (
                            <PopularCardBook
                                key={items.id} 
                                size="big"
                                author={items.author}
                                cardTitle={items.name}
                                image={items.cover_url}
                                onclick={() => sherchingById(items.id)}
                                rate={items.rating}
                            />
                        )
                    })}

                </ExplorerContent>
            </section>
            
            {detailsBook.map(items => (
                <SidePanel 
                    // key={bookId}
                    image={items.cover_url}
                    title={items.name}
                    author={items.author}
                    bookId={items.id}
                    pages={items.total_pages}
                    category={items.category}
                    ratings={items.ratings}
                    sideFunction={sidebar}
                    rate={items.rate}
                />
            ))}
        </ExplorerContainer>
    )
}