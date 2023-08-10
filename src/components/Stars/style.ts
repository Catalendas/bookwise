import { styled } from "../../styles";

export const StarContainer = styled('div', {

    '& label': {

        '& input[type=radio]': {
            display: 'none',
        },

        svg: {
            cursor: 'pointer',
        }
    },

})