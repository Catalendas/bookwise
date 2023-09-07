import { styled } from "@/styles";

export const Container = styled('div', {
    marginTop: '146px',
    width: '308px',
    height: '555px',
    borderLeft: '1px solid $gray700',

    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',

        '&::after': {
            content: '',
            width: '32px',
            height: '4px',
            left: '-20px',
            top: '32px',
            marginTop: '32px',
            // marginBottom: '32px',
            background: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
            borderRadius: '25%'
        }
    },

    '> div': {
        marginTop: '32px',
        padding: '20px 56px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        

        '> div': {
            height: '44px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',

            div: {
                display: 'flex',
                flexDirection: 'column',
            }
        }
    }
})

export const Title = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    span: {
        color: '$gray400'
    }
})