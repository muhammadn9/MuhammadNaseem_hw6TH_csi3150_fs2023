import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import TravelBlog from "./components/TravelBlog/TravelBlog";
import placesData from "./TravelData";

function App() {
  return (
    <div className="App">
      <Hero
        backgroundImage={require("./assets/HeroSection-bg-image.jpg").default}
        title="Your Travel Blog"
        subtitle="Explore the world with us"
      />

      {placesData.map((place, index) => (
        <TravelBlog key={index} placeData={place} />
      ))}
    </div>
  );
}

export default App;
