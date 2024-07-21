import { initialWords } from "./Controler/initialWords";
import { Word, AcceptStatus, State } from "./Types/Types";

type Action =
  | { type: "SET_SEARCH"; payload: string }
  | { type: "NEXT_WORD"; payload: { isCorrect: boolean } }
  | { type: "REARRANGE_LINES" }
  | { type: "RESET" }
  | { type: "END_TIME" };

const initialState: State = {
  strings: initialWords,
  correctCount: 0,
  incorrectCount: 0,
  id: 0,
  search: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "NEXT_WORD":
      const { isCorrect } = action.payload;
      const updatedStrings: Word[] = state.strings.map((word, index) =>
        index === state.id
          ? { ...word, accept: isCorrect ? "true" : "false" }
          : word
      );
      return {
        ...state,
        strings: updatedStrings,
        id: state.id + 1,
        correctCount: isCorrect ? state.correctCount + 1 : state.correctCount,
        incorrectCount: isCorrect
          ? state.incorrectCount
          : state.incorrectCount + 1,
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

    default:
      return state;
  }
}

export { reducer, initialState };

export type { State, Action, Word, AcceptStatus };
