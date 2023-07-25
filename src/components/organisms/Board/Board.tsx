import {
  Box,
  BoxProps,
  Container,
  Grid,
  GridProps,
  autocompleteClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Key } from "..";

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
  flexWrap: 'wrap',
  flexDirection: "row",
  justifyContent: "center",
}));

const DUMMY_LETTERS = [
  "a","p","r","e","m","i","o","t","a","s","w",
  "a","p","r","t","a","s","i","o","w","e","m","i","o","w",
]

const Board = () => {
  return (
    <StyledBoard>
      <Container>
        <StyledKeyWrapper item xs={12}>
          {DUMMY_LETTERS.map((letter, index) => {
            return<Key key={`${letter}_${index}`} keyCode={letter} border={true} bgColor="red" />
          })}
        </StyledKeyWrapper>
      </Container>
    </StyledBoard>
  );
};

export default Board;
