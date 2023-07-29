import { Box, BoxProps, Container, Grid, GridProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Key } from "..";
import { Suspense, useContext, useEffect } from "react";
import { WordleContext } from "../../../store";

const StyledBoard = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "500px",
  margin: "0 auto",
  color: "#ffffff",
  backgroundColor: theme.palette.bgPrimary.main,
}));

const StyledKeyWrapper = styled(Grid)<GridProps>(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "center",
}));

const Board = () => {
  const { keyPressInputHandler, boardState } = useContext(WordleContext);

  // Callback function triggered by keydown event
  const onKeyDownHandler = (event: any) => keyPressInputHandler(event.key);

  // Manage keydown events
  useEffect(() => {
    document.addEventListener("keydown", onKeyDownHandler, false);
    return () => {
      document.removeEventListener("keydown", onKeyDownHandler, false);
    };
  }, [onKeyDownHandler]);

  return (
    <StyledBoard>
      <Container>
        <Suspense>
          <StyledKeyWrapper item xs={12}>
            {boardState.words
              .flat()
              .map((letter: string | undefined, index: any) => {
                return (
                  <Key
                    key={`${letter}_${index}`}
                    keyCode={letter}
                    border={true}
                    bgColor="red"
                  />
                );
              })}
          </StyledKeyWrapper>
        </Suspense>
      </Container>
    </StyledBoard>
  );
};

export default Board;
