import { useEffect, useState } from "react";
import "./App.css";
import { Container, Square } from "./StyledComponents/Block";

function App() {
  const [redBlock, setRedBlock] = useState(6);
  const length = 48;
  const initialData = Array.from({ length: length }, (_, index) => ({
    id: index,
    color: index === redBlock ? "red" : "#000",
  }));
  const [id, setId] = useState(0);

  const [snakeLength, setSnakeLength] = useState([
    { id: 0 },
    { id: 1 },
    { id: 2 },
  ]);
  const [count, setCount] = useState(initialData);
  console.log("snakeLength", snakeLength);
  console.log("id", id);
  const [changeStep, setChangeStep] = useState(1);
  const [located, setLocated] = useState({ id: -1, step: 12 });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        setLocated({
          id: snakeLength[snakeLength.length - 1].id,
          step: 12,
        });
      }
      if (e.key === "ArrowRight") {
        setLocated({
          id: snakeLength[snakeLength.length - 1].id,
          step: 1,
        });
      }
      if (e.key === "ArrowLeft") {
        setLocated({
          id: snakeLength[snakeLength.length - 1].id,
          step: -1,
        });
      }
      if (e.key === "ArrowUp") {
        setLocated({
          id: snakeLength[snakeLength.length - 1].id,
          step: -12,
        });
      }
      // setId((prev) => prev + 12);
      console.log(e.key);
    };
    console.log("Sdfsdf", located);

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [id]);

  // Change Id
  useEffect(() => {
    const clearTime = setInterval(() => {
      setId((prev) => {
        if ((prev + 1) % 12 === 0) {
          return 0;
        }
        return prev + 1;
      });
      setSnakeLength((prev) =>
        prev.map((prevEL, index) => {
          console.log("index", index);

          console.log("prevEL.id", prevEL.id);
          console.log("located.id ", located.id);
          console.log("located.step ", located.step);
          console.log(
            "Math.abs(located.step)!==1",
            Math.abs(located.step) !== 1
          );

          console.log(
            "l(located.id - prevEL.id) % located.step",
            (located.id - prevEL.id) % located.step
          );

          const bardia =
            located.id === prevEL.id ||
            (located.id - prevEL.id) % located.step == 0;
          let newId = prevEL.id + (bardia ? located.step : 1);
          if (newId % 12 == 0) {
            newId = 0;
          }
          return { ...prevEL, id: newId };
        })
      );
    }, 1000);
    return () => clearInterval(clearTime);
  }, [count.length, located.id]);

  // // Estimate redBlock
  // useEffect(() => {
  //   if (id + snakeLength.length - 1 === redBlock) {
  //     setSnakeLength((prev) => [
  //       ...prev,
  //       {
  //         id: (prev[prev.length - 1].id + 1) % count.length, // Add new segment and wrap around
  //       },
  //     ]);
  //     const generateNewRedBlock = () => {
  //       let newRedBlock;
  //       do {
  //         newRedBlock = Math.floor(Math.random() * count.length);
  //       } while (snakeLength.some((segment) => segment.id === newRedBlock));
  //       return newRedBlock;
  //     };

  //     const newRedBlock = generateNewRedBlock();

  //     setRedBlock(newRedBlock);
  //     setCount((prevCount) =>
  //       prevCount.map((item, index) =>
  //         index === newRedBlock
  //           ? { ...item, color: "red" }
  //           : { ...item, color: "#000" }
  //       )
  //     );
  //   }
  // }, [id, redBlock, snakeLength, count.length]);

  return (
    <Container>
      {count.map((el, index) => {
        const isSnakeSegment = snakeLength.some(
          (segment) => segment.id === index
        );
        return (
          <Square key={index} color={isSnakeSegment ? "Green" : el.color}>
            {index}
          </Square>
        );
      })}
    </Container>
  );
}

export default App;
