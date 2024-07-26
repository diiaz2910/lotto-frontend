import React from "react";

// components
import { HeaderMenu } from "../components/Header/HeaderMenu";
import { LeadGrid } from "../components/Grids/Grids";
import { FooterCentered } from "../components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <HeaderMenu />
      <div>
        <h1>Home Page</h1>
      </div>
      <LeadGrid />
      <FooterCentered />
    </div>
  );
};

export default Home;
