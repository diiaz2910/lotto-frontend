// Importing mantine styles
import { MantineProvider } from "@mantine/core";

// components
import { HeaderMenu } from "./components/Header/HeaderMenu";
import { LeadGrid } from "./components/Grids/Grids";
import { FooterCentered } from "./components/Footer/Footer";

// styles
import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider>
      <HeaderMenu />

      <div>
        <h1>Hi, Mantine!</h1>
        {/* Mantine components */}
      </div>
      <LeadGrid />
      <FooterCentered />
    </MantineProvider>
  );
}

export default App;
