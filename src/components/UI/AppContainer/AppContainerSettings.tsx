import React from "react";
import { ThemecontainerLogin, ThemeBackImg } from "./AppContainer.style";

interface ContainerProps {
  children: React.ReactNode;
}

export const AppContainerSettings = ({ children, ...props }: ContainerProps) => {
  return (
    <ThemecontainerLogin className="container" {...props}>
      <ThemeBackImg
        src="https://i.pinimg.com/originals/de/1d/df/de1ddf9ee30e08e15460626b919ef87e.jpg"
        alt="BackgroundImg"
      />
      {children}
    </ThemecontainerLogin>
  );
};
