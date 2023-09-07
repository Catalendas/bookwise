import { styled } from "@/styles";

export const SearchExplorerContainer = styled('div', {
    height: '3rem',
    width: '100%',
    border: '1px solid $gray500',
    borderRadius: '4px',

    display: 'flex',
    alignItems: 'center',
    padding: '14px 20px',
    gap: '8px',

    input: {
        all: 'unset',
        flex: '1 1',
    },

    button: {
        all: 'unset',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    }
})