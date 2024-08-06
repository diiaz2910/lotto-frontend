import React from "react";

// components
import { HeaderMenu } from "../components/Header/HeaderMenu";
import { LeadGrid } from "../components/Grids/Grids";
import { FooterCentered } from "../components/Footer/Footer";
import InputNumbers from "../components/InputNumbers/InputNumbers";
import { ChartsCards } from "../components/ChartsCards/ChartsCards";

const Home: React.FC = () => {
  return (
    <div>
      <HeaderMenu />
      <LeadGrid />
      <ChartsCards />
      <InputNumbers />
      <FooterCentered />
    </div>
  );
};

export default Home;
