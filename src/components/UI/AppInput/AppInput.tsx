import React from "react";
import { ThemeInputMain } from "./AppInput.style";

type AppInputMainProps = {
    type: 'tel' | 'password' | 'username_usersurname' | 'text' | 'search'
    inputPlaceholder: string
    name?: string
    id?: string
}

export const AppInput = ({id, name, inputPlaceholder, type,  ...props}: AppInputMainProps ) => {
    return(
        <ThemeInputMain  id={id} name={name} type={type} placeholder={inputPlaceholder} {...props}></ThemeInputMain>
    )
}