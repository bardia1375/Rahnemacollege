import React, { useEffect, useRef, useState } from "react";

export const InputNumber = ({
  buttontext,
  onSubmit,
}: {
  buttontext: string;
  onSubmit: (x: number) => void;
}) => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current?.focus();
  });
  return (
    <div>
      <input type="number" min="0" ref={ref}></input>
      <button onClick={() => onSubmit(1)}>{buttontext}</button>
    </div>
  );
};
export const FizzBuzzInternal = ({ startNumber }: { startNumber: number }) => {
  return (
    <div>
      <button>+</button>
      <b>{startNumber}</b>
      <button>-</button>;
    </div>
  );
};
type FizzBuzzState =
  | { _tag: "Input" }
  | { _tag: "Started"; startNumber: number };

function FizzBuzz() {
  const [state, setState] = useState<FizzBuzzState>({ _tag: "Input" });
  return (
    <>
      {state._tag === "Input" ? (
        <div>
          <InputNumber
            buttontext="start"
            onSubmit={(x) => setState({ _tag: "Started", startNumber: x })}
          ></InputNumber>
        </div>
      ) : (
        <FizzBuzzInternal startNumber={state.startNumber}></FizzBuzzInternal>
      )}
    </>
  );
}

export default FizzBuzz;
