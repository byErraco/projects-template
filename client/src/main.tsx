import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider } from "antd";
import "./index.css";

const THEME = {
  token: {
    colorPrimary: "#000000",
    colorPrimaryBg: "#ececec",
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={THEME}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
