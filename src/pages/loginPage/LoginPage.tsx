import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppContainerLogin } from "../../components/UI/AppContainer/AppContainer";
import { ThemeLogin, ThemeFormLogin } from "./LoginPage.style";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { User, changeUser } from "../../store/userSlice";
import { AppButtonLogin } from "../../components/UI/AppButtonLogin/AppButtonLogin";

const mockUser: User = {
  user_id: 1,
  name: "Ilon Mask",
  user_tag: "@elonmask",
};

export const LoginPage = () => {
  const user = useSelector((state: RootState) => state.userSlice.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLoginClick = () => {
    dispatch(changeUser(mockUser));
  };

  useEffect(() => {
    console.log("user", user);
    if (user?.user_id) {
      navigate("/setting");
    }
  }, [user, navigate]);

  return (
    <AppContainerLogin>
      <ThemeLogin>
        <img
          src="https://w.forfun.com/fetch/ea/eaf804972f21c184ebe118abd661c869.jpeg"
          alt="Venetsya"
        />
        <ThemeFormLogin>
          <h1>Авторизация</h1>
          <form action="">
            <input type="email" className="email" placeholder="Email" />
            <input
              type="password"
              className="password"
              placeholder="Password"
            />
            <AppButtonLogin
              isDisabled={false}
              type="button"
              value="Войти"
              onClick={onLoginClick}
            />
          </form>
        </ThemeFormLogin>
      </ThemeLogin>
    </AppContainerLogin>
  );
};

{
  /* <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <AppInput
                type="useremail"
                inputPlaceholder="Ваш эмаил"
                isError={errors.useremail ? true : false}
                errorText={errors.useremail?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <AppInput
                type="password"
                inputPlaceholder="Пароль"
                isError={errors.userpassword ? true : false}
                errorText={errors.userpassword?.message}
                {...field}
              />
            )}
          />
          <AppInput type="tel" inputPlaceholder="Номер телефона" />
          <AppInput type="password" inputPlaceholder="Пароль" />
          <AppButton
            type="submit"
            isDisabled={!!Object.keys(errors).length}
            value="Войти"
            // onSubmit={onLoginSubmit}
          ></AppButton>
        </form> */
}
