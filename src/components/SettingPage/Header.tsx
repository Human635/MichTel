import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ThemeHeaderMain } from "./SettingsStyles.style";

export const HeaderSetting = () => {
  const user = useSelector((state: RootState) => state.userSlice.user);

  return (
    <ThemeHeaderMain>
      <img
        src="https://st2.depositphotos.com/3585621/11461/v/450/depositphotos_114612520-stock-illustration-camera-flat-icon-on-black.jpg"
        alt="addPhoto"
      />
      <div>
        <h1>{user?.name}</h1>
        <span>{user?.user_tag}</span>
      </div>
    </ThemeHeaderMain>
  );
};
