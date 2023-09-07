import { ReactNode } from "react";
import { CategoryCardContainer } from "./style";

interface CategoryCard {
    children: ReactNode
    active?: boolean
    click: (e: any) => Promise<void>
}

export function CategoryCard({children, active, click}: CategoryCard) {
    return (
        <CategoryCardContainer onClick={click} active={active}>
            {children}
        </CategoryCardContainer>
    )
}