import { Heading } from "@/components/Heading/style";
import { styled } from "@/styles";

export const Container = styled('section', {
    height: '100%',
    width: '100%',
    display: 'flex',
})

export const ImageContainer = styled('div', {
    margin: '$5 0 $5 $5'
})

export const LoginContainer = styled('div', {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '> div': {
        display: 'flex',
        flexDirection: 'column',
        gap: '$10',
    }
})

export const ButtonContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
})

export const HeadingContainer = styled('div', {
    [`& ${Heading}`]: {
        lineHeight: '$short'
    },

    p: {
        lineHeight: '$base',
        color: '$gray200',
    }
})
