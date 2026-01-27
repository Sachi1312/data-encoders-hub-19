import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

/* ================================
   Google Analytics (Runtime Inject)
   ================================ */
const gaScript1 = document.createElement("script");
gaScript1.async = true;
gaScript1.src = "https://www.googletagmanager.com/gtag/js?id=G-WYKW80BMKN";
document.head.appendChild(gaScript1);

const gaScript2 = document.createElement("script");
gaScript2.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-WYKW80BMKN');
`;
document.head.appendChild(gaScript2);
/* ================================ */

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/data-encoders-hub-19">
    <App />
  </BrowserRouter>
);
