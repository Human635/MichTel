import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeAppLink } from './AppLink.style'

interface AppLinkProps {
    to: string
    value: string
    className?: string
    children?: React.ReactNode;
}

export const AppLink = ({to, className, children, value, ...props}: AppLinkProps) => {
    return(
        <ThemeAppLink className={className} href={to} {...props}>{value} {children}</ThemeAppLink>
    )
}