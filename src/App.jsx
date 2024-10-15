import React, { useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getDesignTokens } from "./Themes";
import Home from "./Home";
import About from "./About"

function App() {
  const [mode, setMode] = useState("light");

  const theme = useMemo(() => getDesignTokens(mode), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: '20px' }}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Home />
        <About />
      </div>
    </ThemeProvider>
  );
}

export default App;
