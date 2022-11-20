import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import ContextApi from "./components/context/ContextApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextApi>
    <App />
  </ContextApi>
);
