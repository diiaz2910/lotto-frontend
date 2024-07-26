import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

// pages
import Home from "./pages/Home";

// styles
import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
