import { styled } from "@stitches/react";

export const Heading = styled('h1', {
    color: '$gray100',

    variants: {
        size: {
            xs: {
                fontSize: '$xs',
            },

            sm: {
                fontSize: '$sm',
            },

            md: {
                fontSize: '$md',
            },

            lg: {
                fontSize: '$lg',
            },

            xl: {
                fontSize: '$xl',
            },

            gg: {
                fontSize: '$2xl',
            }
        }
    }
})