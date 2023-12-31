import { Box } from "@/components/Box"
import { styled } from "@stitches/react"
import backGroundMenu from "../../assets/menu.png"

export const Container = styled('div', {
    display: "flex",

    section: {
        height: '60rem',
        marginLeft: '21.75rem',
        width: '38rem',
        paddingTop: '4.5rem',

        h2: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginBottom: '2.5rem',

            svg: {
                minWidth: '2rem',
                minHeight: '2rem',
            }
        },
        
        '> div': {
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            overflowY: 'scroll',
            height: '100%',

            '&::-webkit-scrollbar': {
                width: '10px',
            },
            
            '&::-webkit-scrollbar-track': {
                backGroundColor: 'transparent',
            },
            
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#888', 
                borderRadius: '10px',
            },

            '&::-webkit-scrollbar-thumb:hover': {   
                backgroundColor: '#555',
            }
        },

    },

    article: {
        marginLeft: '4rem',
        height: '602px',
        width: '20.25rem',
        marginTop: '146px',

        '> div': {
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        }
    }
})

export const Menu = styled(Box, {
    background: `url(${backGroundMenu})`,
    width: '14.5rem',
    height: '61.75rem',
    margin: '20px 0px 20px 20px',

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

