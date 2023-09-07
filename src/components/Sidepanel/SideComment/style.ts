import { Box } from "@/components/Box";
import { styled } from "@/styles";

export const SideCommentContainer = styled(Box, {
    display: 'flex',
    gap: '20px',
    flexDirection: 'column',

    p: {
        color: '$gray300',
    }
})

export const Header = styled('header', {
    display: 'flex',
    gap: '16px',
})

export const SideTitle = styled('div', {
    width: '348px',
})

export const Content = styled('div', {
    fontWeight: '400',
    lineHeight: '160%',
})