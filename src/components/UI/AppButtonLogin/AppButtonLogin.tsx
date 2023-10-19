import React from "react";
import { Link } from "react-router-dom";
import { ThemeAppButtonLogin } from "./AppButtonLogin.style";

interface AppButtonLoginProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string;
  isError?: boolean;
  isDisabled?: boolean;
}

export const AppButtonLogin = ({
  type,
  className,
  value,
  isDisabled,
  isError,
  ...props
}: AppButtonLoginProps) => {
  return (
    <ThemeAppButtonLogin
      className={className}
      disabled={isDisabled}
      isError={isError}
      {...props}
    >
      {value}
    </ThemeAppButtonLogin>
  );
};
