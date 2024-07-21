// utils/Reducer.ts

import { Word, AcceptStatus } from "../types";

export type State = {
  strings: Word[];
  id: number;
  correctCount: number;
  incorrectCount: number;
  search: string;
  endTime: boolean;
};

export type Action =
  | { type: "SET_SEARCH"; payload: string }
  | { type: "NEXT_WORD"; payload: { isCorrect: boolean } }
  | { type: "REARRANGE_LINES" }
  | { type: "RESET" }
  | { type: "END_TIME" };

const initialState: State = {
  strings: [],
  id: 0,
  correctCount: 0,
  incorrectCount: 0,
  search: "",
  endTime: false,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "NEXT_WORD":
      const { isCorrect } = action.payload;
      const updatedStrings = state.strings.map((word, index) =>
        index === state.id ? { ...word, accept: isCorrect ? "true" : "false" } : word
      );
      return {
        ...state,
        strings: updatedStrings,
        id: state.id + 1,
        correctCount: isCorrect ? state.correctCount + 1 : state.correctCount,
        incorrectCount: isCorrect ? state.incorrectCount : state.incorrectCount + 1,
        search: "",
      };
    case "REARRANGE_LINES":
      return {
        ...state,
        strings: state.strings.slice(10),
        id: state.id - 10,
      };
    case "RESET":
      return initialState;
    case "END_TIME":
      return { ...state, endTime: true };
    default:
      return state;
  }
}
