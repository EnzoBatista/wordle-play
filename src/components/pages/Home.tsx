import { Box, BoxProps, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Header, MainContainer } from "../templates";

const StyledHome = styled(Box)<BoxProps>(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.palette.bgPrimary.light,
}));

const Home = () => {
  return (
    <StyledHome>
      <MainContainer>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            [BOARD HERE]
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
