import { styled } from "@/styles";
import { Box } from "../Box";
import backGroundMenu from "../../assets/menu.png"

export const MenuContainer = styled(Box, {
    background: `url(${backGroundMenu})`,
    width: '14.5rem',
    height: '61.75rem',
    margin: '20px 0px 20px 20px',
    position: 'absolute',

    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    
    '> a': {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontWeight: 'bold',
        fontSize: '20px',

        background: 'linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)',
        "-webkit-background-clip": "text",
        "background-clip": "text",
        "-webkit-text-fill-color": "transparent",
    },

    nav: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '4rem',
        gap: '1rem',
        width: '120px',
        height: '158px',
        // border: '1px solid red',

        a: {
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontWeight: 'normal',
            fontSize: '20px',
            color: '$gray400', 
            // paddingLeft: '1rem',
            position: 'relative',
            // boder: '1px solid red',
            
            '&:hover::before': {
                content: '',
                width: '4px',
                height: '24px',
                position: 'absolute',
                left: '-20px',
                top: '5px',
                background: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
                borderRadius: '25%'
            },

            '&:hover': {
                fontWeight: 'bold',
                color: '$gray100',
            },

            svg: {
                minWidth: '24px',
                minHeight: '24px',
            }
        }
    },

    div: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '4rem',
        gap: '1rem',
    },

    button: {
        all: 'unset',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontSize: '1rem',
        fontWeight: 'normal',

        marginTop: '40rem',

        cursor: 'pointer',
    }
})
