import React, { useEffect, useState } from "react";
import "./App.css";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: 1 };

const App: React.FC = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(generateFood);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        const newSnake = moveSnake(prevSnake, direction);
        if (checkCollision(newSnake)) {
          setGameOver(true);
          return prevSnake;
        }

        if (checkFoodCollision(newSnake, food)) {
          setFood(generateFood);
          return [...newSnake, {}];
        }

        return newSnake;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [snake, direction, gameOver, food]);

  const restartGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(generateFood);
    setGameOver(false);
  };

  return (
    <div className="App">
      <h1>Snake Game</h1>
      <div className="game-board">
        {Array.from({ length: GRID_SIZE }).map((_, row) => (
          <div className="row" key={row}>
            {Array.from({ length: GRID_SIZE }).map((_, col) => (
              <div
                className={`cell ${
                  snake.some((segment) => segment.x === col && segment.y === row)
                    ? "snake"
                    : ""
                } ${food.x === col && food.y === row ? "food" : ""}`}
                key={col}
              />
            ))}
          </div>
        ))}
      </div>
      {gameOver && (
        <div className="game-over">
          <h2>Game Over</h2>
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
    </div>
  );
};

function moveSnake(snake: { x: number; y: number }[], direction: { x: number; y: number }) {
  const newSnake = snake.map((segment, index) => {
    if (index === 0) {
      let newX = segment.x + direction.x;
      let newY = segment.y + direction.y;

      // Check for wall collisions and wrap around
      if (newX >= GRID_SIZE) newX = 0;
      if (newX < 0) newX = GRID_SIZE - 1;
      if (newY >= GRID_SIZE) newY = 0;
      if (newY < 0) newY = GRID_SIZE - 1;

      return { x: newX, y: newY };
    }
    return snake[index - 1];
  });

  return newSnake;
}

function checkCollision(snake: { x: number; y: number }[]) {
  const head = snake[0];
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === head.x && snake[i].y === head.y) {
      return true;
    }
  }
  return false;
}

function checkFoodCollision(snake: { x: number; y: number }[], food: { x: number; y: number }) {
  const head = snake[0];
  return head.x === food.x && head.y === food.y;
}

function generateFood() {
  const x = Math.floor(Math.random() * GRID_SIZE);
  const y = Math.floor(Math.random() * GRID_SIZE);
  return { x, y };
}

export default App;
