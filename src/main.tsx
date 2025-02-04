import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./assets/styles/main.css";

(() => {
  const rootElement = document.getElementById("root")!;
  const reactRoot = ReactDOM.createRoot(rootElement);

  reactRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})();
