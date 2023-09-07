import { styled } from "@/styles";
import { Box } from "../Box";

export const PopularBooksContainer = styled(Box, {
    width: '100%',
    height: '130px',
    display: 'flex',
    gap: '20px',

    '> div': {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        

        h3: {
            fontWeight: 700,
            lineHeight: '140%',
            fontSize: '1rem',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        },

        span: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '160%',
            color: '$gray400',
        }
    },


    variants: {
        explorer: {
            big: {
                height: '184px',
                cursor: 'pointer',

                img: {
                    height: '100%',
                    width: '108px'
                },
                
                '> div': {
                    height: '151px',
                    width: '152px',
                    gap: '0',
                    justifyContent: 'space-between'
                }
            }
        }
    }
})