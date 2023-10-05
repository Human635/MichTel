import React from "react";
import { AppContainerLogin } from "../../components/UI/AppContainer/AppContainer";
import { ThemeLogin, ThemeFormLogin } from "./LoginPage.style";
import { Link } from "react-router-dom";
import { AppLink } from "../../components/UI/AppLink/AppLink";

export const LoginPage = () => {
  return (
    <AppContainerLogin>
      <ThemeLogin>
        <img
          src="https://w.forfun.com/fetch/ea/eaf804972f21c184ebe118abd661c869.jpeg"
          alt="Venetsya"
        />
        <ThemeFormLogin>
          <h1>Авторизация</h1>
          <input type="email" className="email" placeholder="Email" />
          <input type="password" className="password" placeholder="Password" />
          <AppLink to="/setting" value="Войти"/>
        </ThemeFormLogin>
      </ThemeLogin>
    </AppContainerLogin>
  );
};
