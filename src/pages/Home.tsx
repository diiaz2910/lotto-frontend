import React from "react";

// components
import { HeaderMenu } from "../components/Header/HeaderMenu";
import { LeadGrid } from "../components/Grids/Grids";
import { FooterCentered } from "../components/Footer/Footer";
import { InputNumbers } from "../components/InputNumbers/InputNumbers";
import { ChartsCards } from "../components/ChartsCards/ChartsCards";
import { Simulations } from "../components/Simulations/Simulations";

const Home: React.FC = () => {
  return (
    <div>
      <HeaderMenu />
      <LeadGrid />
      <ChartsCards />
      <InputNumbers />
      <Simulations />
      <FooterCentered />
    </div>
  );
};

export default Home;
