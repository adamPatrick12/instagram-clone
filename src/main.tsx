import React from "react";
import ReactDOM from "react-dom/client";
import SighUpComponent from "./Components/SignUpComponent";
import "./index.css";
import { RecoilRoot } from "recoil";
import App from "./Components/App";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);