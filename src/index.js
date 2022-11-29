import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import Login from "./components/Login";
import Scanner from "./components/Scanner";
import Confirmation from "./components/Confirmation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/scanner" element={<Scanner />}></Route>
      <Route exact path="/confirm" element={<Confirmation />}></Route>
      <Route exact path="/" element={<Login />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
