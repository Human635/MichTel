import React from "react";
import { useState, useEffect, useInsertionEffect } from "react";
import { Card } from "./Card";
import { useGetPlacesListQuery } from "../../store/api/allCitiesApi";
import { ThemeMainSection } from "./MainPage.style";

export const PlacesSection = () => {
  const { data, isError, isLoading } = useGetPlacesListQuery(null);

  console.log("data", data);

  return (
    <ThemeMainSection className="product" id="menu">
      <h2 className="section-title">Most popular places</h2>

      <p className="section-text">
        There are a cuple of places which is popular among individuals
      </p>

      <div className="place-grid">
        <a href="#">
          {isError && <h1>ПРОИЗОШЛА ОШИБКА</h1>}
          {isLoading && <h1>ЗАГРУЗКА...</h1>}
          {data?.message?.length &&
            data.message.map((place: any) => (
              <Card
                key={place.id}
                name={place.name}
                cost_for_nomad_in_usd={place.cost_for_nomad_in_usd}
                image={place.image}
                region={place.region}
                population={place.population}
                air_quality_now={place.air_quality_now}
                country={place.country}
                internet_speed={place.internet_speed}
                safety_level={place.safety_level}
                humidity={place.humidity}
                wheather_emoji={place.wheather_emoji}
                temperatureC={place.temperatureC}
              />
            ))}
        </a>
      </div>
    </ThemeMainSection>
  );
};
