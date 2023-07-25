import {
  Container,
  ContainerProps,
  Grid,
  GridProps,
  Switch,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { IconInfo, IconChart } from "../atoms/Icons/";

const Header = () => {
  const StyledHeader = styled(Container)<ContainerProps>(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    height: "80px",
    backgroundColor: theme.palette.bgPrimary.dark,
    borderRadius: "8px",
  }));

  const StyledRightGrid = styled(Grid)<GridProps>(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  }));

  const StyledLeftGrid = styled(Grid)<GridProps>(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  }));

  return (
    <StyledHeader>
      <StyledLeftGrid item xs={2}>
        <IconInfo />
      </StyledLeftGrid>
      <Grid item xs={8}>
        <Typography align="center" variant="h1">
          WORDLE
        </Typography>
      </Grid>
      <StyledRightGrid item xs={2}>
        <IconChart />
        <Switch />
      </StyledRightGrid>
    </StyledHeader>
  );
};

export default Header;
