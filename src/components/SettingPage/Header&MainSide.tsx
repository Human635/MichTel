import React from "react";
import { AboutSettings } from "./AboutSettings";
import {
  ThemeHeaderSettings,
  ThemeHeaderMain,
  ThemeForBtnStyle,
} from "./SettingsStyles.style";
import { AppContainerSettings } from "../UI/AppContainer/AppContainerSettings";
import { AppButton } from "../UI/AppButton/AppButton";
import { AppLink } from "../UI/AppLink/AppLink";

export const Settings = () => {
  return (
    <AppContainerSettings>
      <div>
        <ThemeHeaderSettings>
          <ThemeHeaderMain>
            <img
              src="https://st2.depositphotos.com/3585621/11461/v/450/depositphotos_114612520-stock-illustration-camera-flat-icon-on-black.jpg"
              alt="addPhoto"
            />
            <div>
              <h1>Ilon Mask</h1>
              <span>@elonmask</span>
            </div>
          </ThemeHeaderMain>
          <AboutSettings />
        </ThemeHeaderSettings>
      </div>
      <ThemeForBtnStyle>
        <AppLink className="goMain" to="/main" value="">
          <svg
            width="27px"
            height="27px"
            viewBox="0 0 21 21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
              transform="translate(4 6)"
            >
              <path
                d="m8.378 1.376 4.243.003v4.242"
                transform="matrix(.70710678 -.70710678 -.70710678 -.70710678 5.549155 13.396845)"
              />

              <path
                d="m5.5 9.49996362h5c2 .00090726 3-.99908061 3-2.99996362s-1-3.00089514-3-3.00003638h-10"
                transform="matrix(-1 0 0 1 14 0)"
              />
            </g>
          </svg>
        </AppLink>
      </ThemeForBtnStyle>
    </AppContainerSettings>
  );
};
