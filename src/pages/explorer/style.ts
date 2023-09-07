import { styled } from "@/styles";

export const ExplorerContainer = styled('div', {
    display: 'flex',
    
    section: {
        marginLeft: '21.75rem',
        marginTop: '4.5rem',
        width: '996px',
    },
})

export const ExplorerHead = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',  
})

export const ExplorerTitleContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    div: {
        width: '395px'
    },

    h2: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontWeight: 'bold',
        fontSize: '1.5rem',


        svg: {
            minWidth: '2rem',
            minHeight: '2rem',
        }
    }
})

export const ExplorerCategoryContainer = styled('div', {
    display: 'flex',
    gap: '12px',
    width: '100%',
    flexWrap: 'wrap',
})  

export const ExplorerContent = styled('div', {
    marginTop: '3rem',
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: 'repeat(3, 1fr)',
})