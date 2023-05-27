import React from "react";
import ReactDOM from "react-dom/client";



import "./index.css";
import App from "./App.jsx";
import GlobalCss from "./globalCss";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalCss>
      <App />
    </GlobalCss>
  </React.StrictMode>,
);
