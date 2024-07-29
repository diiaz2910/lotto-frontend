import React from "react";

// components
import { HeaderMenu } from "../components/Header/HeaderMenu";
import { LeadGrid } from "../components/Grids/Grids";
import { FooterCentered } from "../components/Footer/Footer";
import InputNumbers from "../components/InputNumbers/InputNumbers";

const Home: React.FC = () => {
  return (
    <div>
      <HeaderMenu />
      <div>
        <h1>Home Page</h1>
        <p>Description.......</p>
      </div>
      <LeadGrid />
      <InputNumbers />
      <FooterCentered />
    </div>
  );
};

export default Home;
