import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={3}
      messages={["Terible", "Bad", "Okay", "Good", "Amazing"]}
    /> */}
  </React.StrictMode>
);
