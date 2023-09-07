import { Box } from "@/components/Box";
import { styled } from "@/styles";

export const Container = styled(Box, {
    padding: '24px',

    header: {
        display: 'flex',
        gap: '24px',

        '> div': {
            display: 'flex',
            flexDirection: 'column',
            gap: '61px',
        } 
    },

    '> div': {
        color: '$gray300',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '160%'
    }
})

export const Title = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    
    h2: {
        width: '28.375rem',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    }
})
