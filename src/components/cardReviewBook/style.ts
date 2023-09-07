import { styled } from "@/styles";
import { Box } from "../Box";

export const Container = styled(Box, {
 
})

export const HeaderAvaliation = styled('div', {
    display: 'flex',
    gap: '1rem',
})

export const HeaderProfile = styled('div', {
    flex: '1 1 0 ',

    h3: {
        fontWeight: 'normal',
        color: '$gray100',
    },

    span: {
        color: '$gray400',
    },
})

export const StarContainer = styled('div', {
    width: '6rem',
    height: '1rem',
})

export const Content = styled('div', {
    display: 'flex',
    gap: '$5',
    marginTop: '$10',

    height: '152px',
    width: '560px',

    '> div': {
        display: 'flex',
        gap: '$5',
        flexDirection: 'column',

        span: {
            color: '$gray400',
            fontWeight: 'normal',
        },

        p: {
            fontSize: '14px',
            fontWeight: 'normal',
            lineHeight: '160%',
            color: '$gray300',
        }
    }
})

