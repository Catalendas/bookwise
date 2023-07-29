import { styled } from "@/styles"
import Image from "next/image"
import React, { ReactNode } from "react"

const ButtonContainer = styled('button', {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$5',
    borderRadius: '8px',
    backgroundColor: '$gray600',
    cursor: 'pointer',
    fontWeight: '$bold',

    '&:disabled': {
        cursor: 'not-allowed',
        background: '$gray700',
        color: '$gray600',

        img: {
            opacity:0.5
        }
    },

    variants: {
        size: {
            sm: {
                padding: '$2'
            },

            lg: {
                padding: '$4 $5'
            },
        },
    }
})

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string
    icon?: ReactNode
    size: string
}

export function Button({title, size, icon, ...props}: ButtonProps) {
    return (
        <ButtonContainer size={size} {...props}>
            {icon}
            {title}
        </ButtonContainer>
    )
}