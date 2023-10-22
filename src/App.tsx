import React from "react";
import { Provider } from "react-redux";
import { LoginPage } from "./pages/loginPage/LoginPage";
import { ThemeProvider } from "styled-components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { theme } from "./theme/theme";
import { SettingPage } from "./pages/SettingPage/SettingPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { store } from "./store/store";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/setting",
      element: <SettingPage />,
    },
    {
      path: "/main",
      element: <MainPage />,
    },
  ]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
