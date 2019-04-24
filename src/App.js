import React from "react";
import "./App.css";
import Header from "./Header";
import Slider from "./Slider";
import Biography from "./Biography";
import GoogleMap from "./GoogleMap";

const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Biography />
      <GoogleMap />
    </div>
  );
};

export default App;
