import React from "react";
import { ThemeAppButton } from "./AppButton.style";

interface AppButtonProps  {
    value: string
    type: any
    className?: string
    children?: React.ReactNode;
}

export const AppButton = ({ className, children, value, type, ...props }: AppButtonProps) => {
    return(
        <ThemeAppButton className={className} type={type} {...props}>{value} {children}</ThemeAppButton>
    )
}