import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-alert-dialog'

export const Overlay = styled(Dialog.Overlay, {
    position: 'fixed',
    width: '100vw',
    height: '180vh',
    inset: 0,
    background: 'rgb(0, 0, 0, 0.75)',
})

export const Content = styled(Dialog.Content, {
    minWidth: '372px',
    minHeight: '225px',
    display: 'flex',
    position: 'fixed',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '56px 72px',
    gap: '40px',
    alignSelf: 'stretch',
    borderRadius: '12px',
    background: '$gray700',
    boxShadow: '4px 16px 24px 0px rgba(0, 0, 0, 0.25)',

    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
})

export const ButtonContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
})

export const CloseButton = styled(Dialog.Cancel, {
    position: 'absolute',
    background: 'transparent',
    border: 0,
    top: '1.5rem',
    right: '1.5rem',
    lineHeight: 0,
    cursor: 'pointer',
})