import React from "react";
import { Card } from "./Card";
import { ThemeMainSection } from "./MainPage.style";
import { useGetPlacesListQuery } from "../../store/api/placesApi";

export const PlacesSection = () => {
  const { data, isError, isLoading } = useGetPlacesListQuery(null);

  console.log("DATA: ", data);

  return (
    <ThemeMainSection className="product" id="menu">
      <h2 className="section-title">Most popular places</h2>

      <p className="section-text">
        There are a cuple of places which is popular among individuals
      </p>

      <div className="place-grid">
        {isError && <h1>ПРОИЗОШЛА ОШИБКА</h1>}
        {isLoading && <h1>ЗАГРУЗКА...</h1>}
        {data &&
          data.map((places: any) => (
            <Card
              key={places.id}
              name={places.name}
              cost_for_nomad_in_usd={places.cost_for_nomad_in_usd}
              image={places.image}
              region={places.region}
              population={places.population}
              air_quality_now={places.air_quality_now}
              country={places.country}
              internet_speed={places.internet_speed}
              safety_level={places.safety_level}
              humidity={places.humidity}
              wheather_emoji={places.wheather_emoji}
              temperatureC={places.temperatureC}
              wheather_icon={places.wheather_icon}
            />
          ))}
      </div>
    </ThemeMainSection>
  );
};
