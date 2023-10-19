import { Card } from "../../components/MainPage/Card";
import React from "react";
import { AppContainerSettings } from "../../components/UI/AppContainer/AppContainerSettings";
import { Header } from "../../components/MainPage/Header";

export const FavoritesPage = () => {
  return (
    <AppContainerSettings>
      <Header />
      <div>
        <h1>Here You can see your favorite places!</h1>
      </div>
      <div></div>
    </AppContainerSettings>
  );
};
