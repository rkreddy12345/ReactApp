import React from "react";
import ReactDOM from "react-dom/client";

/**
 * for dev build: npx parcel index.html
 * for prod build: npx parcel build index.html
 */

const heading1 = <h1>Namaste everyone!</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);