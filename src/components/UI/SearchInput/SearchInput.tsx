import React, { useEffect } from "react";
import { AppInput } from "../AppInput/AppInput";

export const SearchInput = () => {
  return (
    <div className="wrapper">
      <div className="search-container">
        <div className="search-element">
          <input />
          <AppInput
            className="form-control"
            type="search"
            name="search"
            inputPlaceholder="Поиск"
            id="movie-search-box"
            onKeyUp={() => {}}
            onClick={() => {}}
          />
          <div className="search-list" id="search-list"></div>
        </div>
      </div>

      <div className="container">
        <div className="result-container">
          <div className="result-grid" id="result-grid"></div>
        </div>
      </div>
    </div>
  );
};
