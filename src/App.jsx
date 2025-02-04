import React, { useMemo, useState } from "react";
import { ThemeProvider, CssBaseline, Box} from "@mui/material";
import { getDesignTokens } from "./Themes";
import Home from "./Home";
import About from "./About"
import Navbar from "./Navbar";

function App() {
  const [mode, setMode] = useState("light");

  const theme = useMemo(() => getDesignTokens(mode), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Navbar toggleTheme={toggleTheme} />
        <Home />
        <About />
      </Box>
    </ThemeProvider>
  );
}

export default App;
