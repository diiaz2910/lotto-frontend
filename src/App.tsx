import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

// components
import { HeaderMenu } from "./components/Header/HeaderMenu";
import { LeadGrid } from "./components/Grids/Grids";
import { FooterCentered } from "./components/Footer/Footer";
import Home from "./pages/Home";

// styles
import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider>
      <Router>
        <HeaderMenu />
        <div>
          <h1>Hi, Mantine!</h1>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <LeadGrid />
        <FooterCentered />
      </Router>
    </MantineProvider>
  );
}

export default App;
