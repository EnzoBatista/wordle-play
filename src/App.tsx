import React from "react";
import "./App.css";
import { getDesignTokens } from "./theme/theme";
import { Theme } from "./theme/ThemeProvider";
import { PaletteMode, createTheme } from "@mui/material";

const App = () => {
  const [mode, setMode] = React.useState<PaletteMode>("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <Theme theme={theme}>
      <p>HOME</p>
    </Theme>
  );
};

export default App;
