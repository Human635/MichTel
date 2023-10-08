import React from "react";
import { ThemecontainerLogin, ThemeBackImg } from "./AppContainer.style";

interface ContainerProps {
  children: React.ReactNode;
}

export const AppContainerSettings = ({ children, ...props }: ContainerProps) => {
  return (
    <ThemecontainerLogin className="container" {...props}>
      <ThemeBackImg
        src="https://images.hdqwalls.com/wallpapers/evening-landscape-minimal-4k-kl.jpg"
        alt="BackgroundImg"
      />
      {children}
    </ThemecontainerLogin>
  );
};
