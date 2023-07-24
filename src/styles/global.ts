import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },

    body: {
        background: '$gray800',
        color: '$gray100',
        '-webikit-font-smoothing': 'antialiased',
    },

    'body, input, textArea, buuton': {
        fontFamily: '$default',
        fontWeight: '$regular',
    }
})