import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface TimerProps {
  changeHandlerTimer: boolean;
  onEnd: () => void;
}

const Timer: React.FC<TimerProps> = ({ changeHandlerTimer, onEnd }) => {
  const [timer, setTimer] = useState<number>(10);
  const [hour, setHour] = useState<number>(1);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    if (!changeHandlerTimer || !isRunning) return;

    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          if (hour === 0) {
            setIsRunning(false);
            return 0;
          }
          return 10;
        }
        return prevTimer - 1;
      });
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, [changeHandlerTimer, hour, isRunning]);

  useEffect(() => {
    setHour(0);
  }, [changeHandlerTimer]);

  useEffect(() => {
    if (hour === 0 && timer === 0 && isRunning) {
      onEnd();
      setIsRunning(false);
    }
  }, [hour, timer, isRunning, onEnd]);

  return (
    <TimerContainer>
      {changeHandlerTimer ? (
        <div>
          {hour}:{timer < 10 ? `0${timer}` : timer}
        </div>
      ) : (
        "1:00"
      )}
    </TimerContainer>
  );
};

export default Timer;

// Styled components
const TimerContainer = styled.span`
  white-space: nowrap;
  padding: 4px;
  text-align: center;
  font-size: 1em;
  border-radius: 3px;
  color: white;
  background: #3c4d5c;
`;
