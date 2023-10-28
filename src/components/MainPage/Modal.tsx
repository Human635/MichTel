import React from "react";
import { ThemeModalItem } from "./MainPage.style";

interface ModalItemProps {
  image: any;
  name: any;
  cost_for_nomad_in_usd: any;
  descriptionFromReview: any;
}

export const ModalItem = ({
  image,
  name,
  cost_for_nomad_in_usd,
  descriptionFromReview,
}: ModalItemProps) => {
  return (
    <ThemeModalItem className="card">
      <img className="hset" src={image} />
      <h1 className="title">
        {name}
        <br />
        {cost_for_nomad_in_usd}
      </h1>
      <span> {descriptionFromReview} </span>
      <button onClick={() => {}} className="buy-btn">
        Add to Favories
      </button>
    </ThemeModalItem>
  );
};
