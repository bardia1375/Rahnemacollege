
import React from 'react';
import { StyledInput } from "../StyledComponent/FingersStyle";
import {  State, Action } from "../reducer";

type InputHandlerProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
  setChangeHandlerTimer: React.Dispatch<React.SetStateAction<boolean>>;
};

const InputHandler: React.FC<InputHandlerProps> = ({ state, dispatch, setChangeHandlerTimer }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setChangeHandlerTimer(true);

    if (event.code === "Space") {
      event.preventDefault(); // Prevent adding space to input
      if (state.search.trim() === "") {
        dispatch({ type: "SET_SEARCH", payload: "" });
      } else {
        const isCorrect = state.strings[state.id].value.trim() === state.search.trim();
        dispatch({ type: "NEXT_WORD", payload: { isCorrect } });

        if (state.id + 1 === 10) {
          dispatch({ type: "REARRANGE_LINES" });
        }
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_SEARCH", payload: e.target.value });
  };

  return (
    <StyledInput
      onKeyDown={handleKeyDown}
      value={state.search}
      onChange={handleChange}
      type="text"
    />
  );
};

export default InputHandler;
