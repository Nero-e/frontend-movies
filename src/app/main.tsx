import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

import "../styles/index.css";
import App from "./App.tsx";
import { moviesApi } from "./api/apiSlice.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={moviesApi}>
      <App />
    </ApiProvider>
  </StrictMode>
);
