import React from "react";
import Featured from "./components/Featured";
import Header from "./components/Header";
import Hero from "./components/Hero";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <Featured/>
    </div>
  );
};

export default Homepage;
