import React from "react";
import { Card } from "./Card";
import { ThemeMainSection } from "./MainPage.style";
import { useGetPlacesListQuery } from "../../store/api/placesApi";

export const PlacesSection = () => {
  const { data, isError, isLoading } = useGetPlacesListQuery(null);

  console.log("DATA: ", data);

  return (
    <ThemeMainSection className="product boxBackExchange" id="menu">
      <h2 className="section-title mainTitles ">Most popular places</h2>

      <p className="section-text secondaryText">
        There are a couple of places which are popular among individuals
      </p>

      <div className="place-grid">
        {isError && <h1 className="mainTitles">ПРОИЗОШЛА ОШИБКА</h1>}
        {isLoading && <h1 className="mainTitles">ЗАГРУЗКА...</h1>}
        {data &&
          data.map((place: any) => (
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
              wheather_emoji={place.weather_emoji}
              temperatureC={place.temperatureC}
              // weather_icon={place.weather_icon}
            />
          ))}
      </div>
    </ThemeMainSection>
  );
};
