import React from "react";
import { State, Action } from "../reducer";
import { StyledInput } from "../../Components/Styled/Input";

type TextInputProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
  setChangeHandlerTimer: React.Dispatch<React.SetStateAction<boolean>>;
  search: string;
  setSearch: (value: string) => void;
};

const TextInput: React.FC<TextInputProps> = ({
  state,
  dispatch,
  setChangeHandlerTimer,
  search,
  setSearch,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setChangeHandlerTimer(true);

    if (event.code === "Space") {
      event.preventDefault(); // Prevent adding space to input
      const target = event.target as HTMLInputElement;
      if (search.trim() === "") {
        setSearch(target.value);
      } else {
        const isCorrect =
          state.strings[state.id].value.trim() === search.trim();
        dispatch({ type: "NEXT_WORD", payload: { isCorrect } });
        setSearch("");
        if (state.id + 1 === 10) {
          dispatch({ type: "REARRANGE_LINES" });
        }
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <StyledInput
      onKeyDown={handleKeyDown}
      value={search}
      onChange={handleChange}
      type="text"
    />
  );
};

export default TextInput;
