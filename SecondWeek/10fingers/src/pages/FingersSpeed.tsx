import { useReducer, useState } from "react";
import { Container, Tools } from "./StyledComponent/FingersStyles";
import Timer from "../Components/Timer";
import Result from "./Result";
import { reducer, initialState, State } from "./reducer";
import StringHandler from "./Controler/StringHandler";
import TextInput from "./Controler/TextInput";
import { InitialWords } from "./Controler/InitialWords";
import Button from "../Components/Button";

const updatedInitialState: State = {
  ...initialState,
  strings: InitialWords,
};

function FingersSpeed() {
  const [state, dispatch] = useReducer(reducer, updatedInitialState);
  const [changeHandlerTimer, setChangeHandlerTimer] = useState<boolean>(false);
  const [timerKey, setTimerKey] = useState<number>(0); // Key for resetting Timer
  const [endTime, setEndTime] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const handleRefresh = () => {
    dispatch({ type: "RESET" });
    setChangeHandlerTimer(false);
    setTimerKey((prev) => prev + 1); // Increment key to reset Timer
    setSearch("");
    setEndTime(false);
  };
  const handleEndTime = () => {
    setEndTime(!endTime);
  };

  return (
    <Container>
      {!endTime && (
        <StringHandler
          strings={state.strings}
          id={state.id}
          search={search}
          startIndex={0}
          numberOfWordsInEachLine={10}
        />
      )}

      <Tools>
        <TextInput
          search={search}
          setSearch={setSearch}
          state={state}
          dispatch={dispatch}
          setChangeHandlerTimer={setChangeHandlerTimer}
        />
        <Timer
          changeHandlerTimer={changeHandlerTimer}
          onEnd={handleEndTime}
          key={timerKey}
        />
        <Button onClick={handleRefresh}>Refresh</Button>
      </Tools>
      {endTime && (
        <Result
          correctWords={state.correctCount}
          wrongWords={state.incorrectCount}
        />
      )}
    </Container>
  );
}

export default FingersSpeed;
