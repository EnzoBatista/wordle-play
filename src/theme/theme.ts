import { PaletteMode } from "@mui/material";
declare module "@mui/material/styles" {
  interface Palette {
    yellow: PaletteColorOptions;
    green: PaletteColorOptions;
    gray: PaletteColorOptions;
    overlay: PaletteColorOptions;
    bgPrimary: PaletteColorOptions;
  }

  interface PaletteColorOptions {
    main?: string;
    dark?: string;
    light?: string;
  }
  interface PaletteOptions {
    yellow?: PaletteColorOptions;
    green?: PaletteColorOptions;
    gray?: PaletteColorOptions;
    overlay?: PaletteColorOptions;
    bgPrimary?: PaletteColorOptions;
  }
}

export const lightPalette = {
  typography: {
    h1: {
      fontSize: "40px",
      fontWeight: "600",
      color: "#202537",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "3px",
    },
  },
  palette: {
    yellow: {
      // main: "#CEB02C",
      // dark: "",
      // light: "",
    },
    green: {
      main: "#66A060",
      // dark: "",
      // light: "",
    },
    gray: {
      main: "#dbddde",
      // dark: "#939B9F",
      // light: "#F3F3F3",
    },
    overlay: {
      main: "rgba(243, 243, 243, 0.89)",
      // dark: "",
      // light: "",
    },
    bgPrimary: {
      dark: "#F3F3F3",
      light: "#F9F9F9",
    },
  },
};

const darkPalette = {
  typography: {
    h1: {
      fontSize: "40px",
      fontWeight: "600",
      color: "black",
    },
  },
  palette: {
    gray: {
      main: "#939B9F",
      dark: "#939B9F",
      light: "#565F7E",
    },
    bgPrimary: {
      main: "#939B9F",
    },
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  // palette: {
  mode,
  ...(mode === "dark"
    ? {
        ...lightPalette,
        ...darkPalette,
      }
    : {
        ...lightPalette,
      }),
  // },
});
