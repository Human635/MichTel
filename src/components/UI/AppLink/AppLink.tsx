import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeAppLink } from './AppLink.style'

interface AppLinkProps {
    to: string
    value: string
}

export const AppLink = ({to, value, ...props}: AppLinkProps) => {
    return(
        <ThemeAppLink href={to} {...props}>{value}</ThemeAppLink>
    )
}