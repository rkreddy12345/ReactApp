import React from "react";
import ReactDOM from "react-dom/client";

/**
 * for dev build: npx parcel index.html
 * for prod build: npx parcel build index.html
 */

const heading1 = React.createElement(
    "h1",
    {
      id: "title1",
    },
    "heading1"
  );
  const heading2 = React.createElement(
    "h2",
    {
      id: "title2",
    },
    "heading2"
  );
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading1, heading2]
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);