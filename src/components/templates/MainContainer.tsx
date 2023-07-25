import { Box, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactNode } from "react";

const StayledMainContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
  maxHeight: "100vh",
  maxWidth: "800px",
  padding: "60px",
  margin: "0 auto",
  backgroundColor: "inherit",
}));

const MainContainer = ({ children }: { children: ReactNode }) => (
  <StayledMainContainer>{children}</StayledMainContainer>
);
export default MainContainer;
