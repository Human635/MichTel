import React from "react";
import { ThemecontainerLogin, ThemeBackImg } from "./AppContainer.style";

interface ContainerProps {
  children: React.ReactNode;
}

export const AppContainerLogin = ({ children, ...props }: ContainerProps) => {
  return (
    <ThemecontainerLogin className="container" {...props}>
      <ThemeBackImg
        src="https://fons.pibig.info/uploads/posts/2023-05/thumbs/1685397032_fons-pibig-info-p-besshovnie-foni-vkontakte-65.jpg"
        alt="BackgroundImg"
      />
      {children}
    </ThemecontainerLogin>
  );
};
