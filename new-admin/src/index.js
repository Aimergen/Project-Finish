import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />

      <ToastContainer />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
