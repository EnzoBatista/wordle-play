import React from "react";
import { BoardState } from "./WordleProvider";

type initialCtxType = {
  keyPressInputHandler: (key: string) => void;
  boardState: BoardState;
};

const initialCtx: initialCtxType = {
  keyPressInputHandler: () => {},
  boardState: {
    words: [
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ],
    rowIndex: 0,
    currentWord: [],
  },
};

const WordleContext = React.createContext(initialCtx);

export default WordleContext;
