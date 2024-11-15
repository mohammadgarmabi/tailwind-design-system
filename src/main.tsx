import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Button from "./components/Button";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Button>Children</Button>
  </StrictMode>
);
