import WordleContext from "./wordle-context";
import { ReactNode, useEffect, useReducer, useState } from "react";

enum BoardActionKind {
  ADD_LETTER = "ADD_LETTER",
  REMOVE_LETTER = "REMOVE_LETTER",
  ADD_WORD = "ADD_WORD",
}

// An interface for our actions
type BoardAction = {
  type: BoardActionKind;
  payload?: string;
};

// An interface for our state
export type BoardState = {
  words: [
    [string, string, string, string, string],
    [string, string, string, string, string],
    [string, string, string, string, string],
    [string, string, string, string, string],
    [string, string, string, string, string]
  ];
  rowIndex: number;
  currentWord: string[];
};

const boardReducer = (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case BoardActionKind.ADD_LETTER:
      if (state.cursor === 5 || state.rowIndex === 5) return state;
      if (state.cursor < 5) {
        let updatedCurrentWord = state.currentWord.toSpliced(state.cursor, 1, payload);
        let updateWords = state.words.toSpliced(
          state.rowIndex,
          1,
          updatedCurrentWord
        );

        return {
          ...state,
          currentWord: updatedCurrentWord,
          cursor: state.cursor + 1,
          words: updateWords,
        };
      }
      break;

    case BoardActionKind.REMOVE_LETTER:
      if (state.cursor === 0 ) return state;
      if (state.cursor <= 5) {
        let updatedCurrentWord = state.currentWord.toSpliced(state.cursor - 1, 1, "");
        let updateWords = state.words.toSpliced(
          state.rowIndex,
          1,
          updatedCurrentWord
        );

        return {
          ...state,
          currentWord: updatedCurrentWord,
          cursor: state.cursor - 1,
          words: updateWords,
        };
      }
      break;

    case BoardActionKind.ADD_WORD:
      if (state.rowIndex === 5 || state.cursor < 5) return state;
      return {
        ...state,
        currentWord: ["", "", "", "", ""],
        cursor: 0,
        rowIndex: state.rowIndex + 1,
      };

      break;
  }
};

const WordleProvider = ({ children }: { children: ReactNode }) => {
  const [boardState, dispatchBoard] = useReducer(boardReducer, {
    words: [
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ],
    currentWord: ["", "", "", "", ""],
    rowIndex: 0,
    cursor: 0,
  });

  const keyPressInputHandler = (key: string) => {
    switch (key) {
      case "Enter":
        dispatchBoard({ type: "ADD_WORD" });
        break;
      case "Backspace":
        console.log("KEY: ", key);
        dispatchBoard({ type: "REMOVE_LETTER" });
        break;
      default:
        dispatchBoard({ type: "ADD_LETTER", payload: key });
    }
  };

  useEffect(() => {
    console.log("CURRENT_WORD", boardState.currentWord);
  }, [boardState.currentWord]);

  useEffect(() => {
    console.log("WORDS", boardState.words);
  }, [boardState.words]);
  useEffect(() => {
    console.log("CURSOR", boardState.cursor);
  }, [boardState.cursor]);

  useEffect(() => {
    console.log("CURRENT_INDEX", boardState.rowIndex);
  }, [boardState.cursor]);


  return (
    <WordleContext.Provider
      value={{
        keyPressInputHandler,
        boardState,
      }}
    >
      {children}
    </WordleContext.Provider>
  );
};

export default WordleProvider;
