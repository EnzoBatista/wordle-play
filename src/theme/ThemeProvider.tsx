import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";

export const Theme = ({ children, theme }: {children: ReactNode, theme: any}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
