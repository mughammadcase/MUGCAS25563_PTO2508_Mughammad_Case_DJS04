import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PodcastProvider } from "./context/PodcastContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PodcastProvider>
    <App />
  </PodcastProvider>,
);
