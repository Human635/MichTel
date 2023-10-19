import { Card } from "../../components/MainPage/Card";
import React from "react";
import { AppContainerSettings } from "../../components/UI/AppContainer/AppContainerSettings";
import { Header } from "../../components/FavoritePage/HeaderFav";
import { ThemeMainSection } from "../../components/MainPage/MainPage.style";

export const FavoritesPage = () => {
  return (
    <AppContainerSettings>
      <Header />
      <ThemeMainSection className="product" id="menu">
        <div className="place-grid"></div>
      </ThemeMainSection>
    </AppContainerSettings>
  );
};
