import { Box, BoxProps, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Header, MainContainer } from "../templates";
import { Board } from "../organisms";

const StyledHome = styled(Box)<BoxProps>(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.palette.bgPrimary.light,
}));

const Home = () => {
  return (
    <StyledHome>
      <MainContainer>
        <Grid container>
          <Grid item xs={12} mt={8}>
            <Header />
          </Grid>
          <Grid item xs={12} mt={8}>
            <Board />
          </Grid>
          <Grid item xs={12}>
            [KEY-BOARD HERE]
          </Grid>
        </Grid>
      </MainContainer>
    </StyledHome>
  );
};

export default Home;
