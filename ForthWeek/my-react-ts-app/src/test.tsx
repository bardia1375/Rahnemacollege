import { useEffect, useState } from "react";
import "./App.css";
import { Container, Square } from "./StyledComponents/Block";

function App() {
  const [redBlock, setRedBlock] = useState(6);
  const initialData = Array.from({ length: 82 }, (_, index) => ({
    id: index,
    color: index == redBlock ? "red" : "#000",
  }));
  const [id, setId] = useState(0);

  const [snakeLength, setSnakeLength] = useState([
    { id: 0 },
    { id: 1 },
    { id: 2 },
  ]);
  const [count, setCount] = useState(initialData);
  console.log("snakeLength", snakeLength);

  useEffect(() => {
    setSnakeLength([{ id: id - 2 }, { id: id - 1 }, { id: id }]);
  }, [id]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
      }
      console.log(e.key);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  //Change Id
  useEffect(() => {
    const clearTime = setInterval(() => {
      setId((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(clearTime);
  }, []);

  //estimate redBlock
  useEffect(() => {
    if (id == redBlock) {
      setSnakeLength((prev) => [...prev, { id: id }]);
      const generateNewRedBlock = () => {
        let newRedBlock: number;
        do {
          newRedBlock = Math.floor(Math.random() * count.length);
        } while (snakeLength.some((segment) => segment.id === newRedBlock));
        return newRedBlock;
      };

      const newRedBlock = generateNewRedBlock();
      // const newRedBlock = Math.floor(Math.random() * count.length);

      setRedBlock(newRedBlock);
      setCount((prevCount) =>
        prevCount.map((item, index) =>
          index === newRedBlock
            ? { ...item, color: "red" }
            : { ...item, color: "#000" }
        )
      );
    }
  }, [id]);
  return (
    <Container>
      {count.map((el, index) => {
        if (index === id) {
          return snakeLength.map(() => <Square color="green" />);
        }
        return (
          <>
            <Square key={index} color={el.color}>
              {index}
            </Square>
          </>
        );
      })}
    </Container>
  );
}

export default App;
