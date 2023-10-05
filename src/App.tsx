// const App = () => {
//   return (
//     <div className="App">
//       <h1>MichTel</h1>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Provider } from "react-redux";
import { LoginPage } from "./pages/loginPage/LoginPage";
import { ThemeProvider } from "styled-components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { theme } from "./theme/theme";
import { SettingPage } from "./pages/SettingPage/SettingPage";

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
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
