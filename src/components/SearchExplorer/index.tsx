import { MagnifyingGlass } from "phosphor-react";
import { SearchExplorerContainer } from "./style";

interface SearchExplorerProps {
    search?: (e: any) => Promise<void> 
}

export function SearchExplorer({search}: SearchExplorerProps) {
    return (
        <SearchExplorerContainer>
            <input onChange={search} type="text" placeholder="Buscar livro ou autor"/>
            <button>
                <MagnifyingGlass color="#303F73"/>
            </button>
        </SearchExplorerContainer>
    )
}