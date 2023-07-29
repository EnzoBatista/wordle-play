import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { getDesignTokens } from "./theme/theme";
import { Theme } from "./theme/ThemeProvider";
import { PaletteMode, createTheme } from "@mui/material";
import { WordleProvider } from "./store";

const App = () => {
  const [mode, setMode] = React.useState<PaletteMode>("light");

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <Theme theme={theme}>
      <WordleProvider>
        <Home />
      </WordleProvider>
    </Theme>
  );
};

export default App;
