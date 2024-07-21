// src/App.tsx

import React, { useReducer, useState } from "react";
import styled from "styled-components";
import Timer from "./Components/Timer";
import Result from "./Components/Result";
import { reducer, State, Action } from "./Utils/Reducer";
import LineHandler from "./Components/LineHandler";

const StyledInput = styled.input`
  width: 50%;
  border-top: 1px solid #575757;
  height: 50px;
  border-right: 1px solid #6b7a89;
  border-bottom: 1px solid #70869b;
  border-left: 1px solid #525a62;
  font-size: 2rem;
  line-height: 1em;
  background: url(https://img.10fastfingers.com/img/layout/sprite-main.png) 0px -60px
    no-repeat;
  font-family: Times New Roman, Times, serif;
  color: #333;
`;

const initialText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan tortor. Cras vehicula turpis a orci luctus, non bibendum metus pulvinar. Nulla malesuada lacus eget nunc laoreet, sed convallis risus eleifend. Fusce vitae ex urna. Morbi euismod orci vel urna pretium, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan tortor. Cras vehicula turpis a orci luctus, non bibendum metus pulvinar. Nulla malesuada lacus eget nunc laoreet, sed convallis risus eleifend. Fusce vitae ex urna. Morbi euismod orci vel urna pretium, et dictum quam condimentum. Etiam non elit eu nisi sodales feugiat a ac mauris. Integer et dictum dolor. Ut vel purus ac dolor bibendum vestibulum. Nullam a est et sem suscipit gravida. Nullam vitae purus dolor. Suspendisse et magna vitae ligula pharetra sagittis in nec orci. Duis vitae erat magna. Suspendisse quis nisl nec nisi aliquet vehicula. Vivamus vulputate ligula nec turpis congue, vel egestas orci tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan tortor. Cras vehicula turpis a orci luctus, non bibendum metus pulvinar. Nulla malesuada lacus eget nunc laoreet, sed convallis risus eleifend. Fusce vitae ex urna. Morbi euismod orci vel urna pretium, et dictum quam condimentum. Etiam non elit eu nisi sodales feugiat a ac mauris. Integer et dictum dolor. Ut vel purus ac dolor bibendum vestibulum. Nullam a est et sem suscipit gravida. Nullam vitae purus dolor. Suspendisse et magna vitae ligula pharetra sagittis in nec orci. Duis vitae erat magna. Suspendisse quis nisl nec nisi aliquet vehicula. Vivamus vulputate ligula nec turpis congue, vel egestas orci tincidunt.`;

const initialWords = initialText.split(" ").map((word, index) => ({
  id: index + 1, // Adding 1 to start ids from 1 (optional)
  value: word,
  accept: "",
}));

const initialState: State = {
  strings: initialWords,
  id: 0,
  correctCount: 0,
  incorrectCount: 0,
  search: "",
  endTime: false,
};

function App() {
  // Reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  // State
  const [changeHandlerTimer, setChangeHandlerTimer] = useState<boolean>(false);
  const [timerKey, setTimerKey] = useState<number>(0); // Key for resetting Timer

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

  const refreshHandler = () => {
    dispatch({ type: "RESET" });
    setChangeHandlerTimer(false);
    setTimerKey((prev) => prev + 1); // Increment key to reset Timer
  };

  const handleEndTime = () => {
    dispatch({ type: "END_TIME" });
  };

  return (
    <div
      style={{
        margin: "100px auto",
        width: "max-content",
        minWidth: "1100px",
        fontSize: "2rem",
      }}
    >
      {!state.endTime && (
        <div
          style={{
            height: "100px",
            padding: "4px",
            borderRadius: "4px 8px",
            overflow: "hidden",
            background: "#fff",
            color: "black",
          }}
        >
          <LineHandler
            strings={state.strings}
            id={state.id}
            search={state.search}
            numberOfWordsInEachLine={10}
          />
        </div>
      )}

      <div
        style={{
          display: "flex",
          marginTop: "8px",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <StyledInput
          onKeyDown={handleKeyDown}
          value={state.search}
          onChange={handleChange}
          type="text"
        />
        <Timer changeHandlerTimer={changeHandlerTimer} onEnd={handleEndTime} key={timerKey} />
        <div onClick={refreshHandler} style={{ cursor: "pointer" }}>
          refresh
        </div>
      </div>
      {state.endTime && (
        <Result correctWords={state.correctCount} wrongWords={state.incorrectCount} />
      )}
    </div>
  );
}

export default App;
