import { styled } from "@stitches/react";

export const ProfileContainer = styled('div', {
    display: 'flex',
    gap: '64px',
    
    section: {
        marginLeft: '21.75rem',
        marginTop: '4.5rem',
        width: '624px',
    },
})

export const HeaderProfileBooks = styled('header', {
    display: 'flex',
    flexDirection: 'column',
    gap: '41px',
    width: '100%',

    h2: {
        display: 'flex',
        gap: '12px'
    }
})

export const ProfileContent = styled('div', {
    maxHeight: '100%',
    overflowY: 'scroll',
    
    marginTop: '3rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
})

