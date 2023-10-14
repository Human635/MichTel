import React from "react";
import { Card } from "./Card";
import { ThemeMainSection } from "./MainPage.style";

export const PlacesSection = () => {
  return (
    <ThemeMainSection className="product" id="menu">
      <h2 className="section-title">Most popular places</h2>

      <p className="section-text">
        There are a cuple of places which is popular among individuals
      </p>

      <div className="place-grid">
        <a href="#">
          <Card/>
        </a>
        <a href="#">
          <Card/>
        </a>
        <a href="#">
          <Card/>
        </a>
        <a href="#">
          <Card/>
        </a>
        <a href="#">
          <Card/>
        </a>
        <a href="#">
          <Card/>
        </a>
      </div>
    </ThemeMainSection>
  );
};
