import React from "react";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useTheme } from "../hooks/use-theme";
import { ThemeLightDark } from "./MainPage.style";

export const ThemeExchange = () => {
  const { theme, setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme("light");
  };
  const handleDarkThemeClick = () => {
    setTheme("dark");
  };
  return (
    <ThemeLightDark>
      <button onClick={handleLightThemeClick}>Light</button>
      <button onClick={handleDarkThemeClick}>Dark</button>
    </ThemeLightDark>
  );
};
