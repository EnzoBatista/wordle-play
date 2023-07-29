import { Box, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledKey = styled(Box)<BoxProps & KeyType>(
  ({ theme, border, bgColor }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "76px",
    width: "76px",
    margin: '5px',
    borderRadius: '5px',
    color: "White",
    fontSize: "35px",
    backgroundColor: bgColor,
    border: [border === true ? `solid 1px ${theme.palette.primary}` : "none"],
  })
);

type KeyType = {
  keyCode?: string;
  border?: boolean;
  bgColor?: string;
  onClick?: () => {};
};

const Key = ({ keyCode, bgColor, onClick }: KeyType) => {
  return (
    <StyledKey onClick={onClick} bgcolor={bgColor}>
      {keyCode}
    </StyledKey>
  );
};

export default Key;
