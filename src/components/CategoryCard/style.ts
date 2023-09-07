import { styled } from "@/styles";

export const CategoryCardContainer = styled('button', {
    all: 'unset',
    border: '1px solid $purple100',
    padding: '4px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$purple100',
    borderRadius: '99px',
    transition: '0.5s',

    '&:hover': {
        color: '$gray100',
        background: '$purple200',
        transition: '0.5s',
    },

    variants: {
        active: {
            true: {
                color: '$gray100',
                background: '$purple200',
                border: '$purple200',
            }
        }
    }
})