import { useReducer, useState } from "react";
import { Container, Tools } from "./StyledComponent/FingersStyle";
import Timer from "../Components/Timer";
import Result from "./Result";
import { reducer, initialState, State } from "./reducer";
import StringHandler from "./Controler/StringHandler";
import InputHandler from "./Controler/InputHandler";
import { initialWords } from "./Controler/initialWords";
import Refresh from "../Components/Refresh";

const updatedInitialState: State = {
  ...initialState,
  strings: initialWords,
};

function FingersSpeed() {
  const [state, dispatch] = useReducer(reducer, updatedInitialState);
  const [changeHandlerTimer, setChangeHandlerTimer] = useState<boolean>(false);
  const [timerKey, setTimerKey] = useState<number>(0); // Key for resetting Timer
  const [endTime, setEndTime] = useState<boolean>(false);
  const handleRefresh = () => {
    dispatch({ type: "RESET" });
    setChangeHandlerTimer(false);
    setTimerKey((prev) => prev + 1); // Increment key to reset Timer
  };
  const handleEndTime = () => {
    setEndTime(!endTime);
  };

  return (
    <Container>
      {!endTime&& (
        <StringHandler
          strings={state.strings}
          id={state.id}
          search={state.search}
          startIndex={0}
          numberOfWordsInEachLine={10}
        />
      )}

      <Tools>
        <InputHandler
          state={state}
          dispatch={dispatch}
          setChangeHandlerTimer={setChangeHandlerTimer}
        />
        <Timer
          changeHandlerTimer={changeHandlerTimer}
          onEnd={handleEndTime}
          key={timerKey}
        />
        <Refresh onRefresh={handleRefresh} />
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
