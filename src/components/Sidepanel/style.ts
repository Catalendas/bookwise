import { styled } from "@/styles";
import { Box } from "../Box";

export const SidePanelContainer = styled(Box, {
    position: 'absolute',
    // height: '1024px',
    width: '660px',
    left: '839px',
    backgroundColor: '$gray800',
    padding: '48px 64px',
    display: 'flex',
    flexDirection: 'column',
    gap: '46px',

    span: {
        color: '$gray300',
        fontWeight: '400',
    }
})

export const BookDetail = styled(Box, {
    width: '564px',
    height: '414px',
    padding: '24px 32px 16px 32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
})

export const Book = styled('div', {
    display: 'flex',
    gap: '2rem',

    img: {
        width: '171px',
        height: '242px',
    },

    '> div': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        div: {
            width: '100%'
        },

    }
})

export const AboutBook = styled('div', {
    display: 'flex',
    gap: '3.75rem',
    padding: '24px 0px',
    borderTop: '1px solid $gray600',

    '> div': {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',

        div: {
            display: 'flex',
            flexDirection: 'column',
        }
    }
})

export const CommentsContainer = styled('div', {
    width: '564px',
})

export const CommentsTitle = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',

    button: {
        all: 'unset',
        cursor: 'pointer'
    }
})

export const Comments = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
})

export const Commented = styled(Box, {
    marginBottom: '12px',
    display: 'flex',
    flexDirection: 'column',

    '.title': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})

export const CommentedArea = styled('div', {

    width: '100%',
    display: 'flex',
    flexDirection: 'column',

    textarea: {
        marginTop: '33px',
        padding: '20px',
        height: '164px',
        resize: 'none',
        color: '$gray400',
        background: '$gray800',
        borderColor: '$gray500',
        borderRadius: '4px',
    },

    div: {
        marginTop: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        justifyContent: 'flex-end',
    },
})