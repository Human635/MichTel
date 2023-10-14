import React from "react";
import { HomeSection } from "../../components/MainPage/HomeSection";
import { Header } from "../../components/MainPage/Header";
import { PlacesSection } from "../../components/MainPage/PlacesSection";
import { ThemeMainPage } from "./MainPage.style";
import { Footer } from "../../components/MainPage/Footer";

export const MainPage = () => {
  return (
    <>
      <ThemeMainPage>
        <Header />
        <HomeSection />
        <PlacesSection />
      </ThemeMainPage>
      <Footer />
    </>
  );
};
