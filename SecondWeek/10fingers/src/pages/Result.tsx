import React from "react";
import styled from "styled-components";

interface ResultProps {
//   wpm: number;
  correctWords: number;
  wrongWords: number;
//   totalKeystrokes: number;
//   accuracy: number;
}

const Result: React.FC<ResultProps> = ({
//   wpm,
  correctWords,
  wrongWords,
//   totalKeystrokes,
//   accuracy,
}) => {
  return (
    <ResultContainer>
      <Title>Result</Title>
      <Screenshot>
        <WPM>10 WPM</WPM>
        <Stats>
          <Stat>
            Keystrokes <Keystrokes>(0 |10)</Keystrokes>
          </Stat>
          <Stat>
            Accuracy <Accuracy>20%</Accuracy>
          </Stat>
          <Stat>
            Correct words <CorrectWords>{correctWords}</CorrectWords>
          </Stat>
          <Stat>
            Wrong words <WrongWords>{wrongWords}</WrongWords>
          </Stat>
        </Stats>
        <ShareButton>Share on Facebook</ShareButton>
      </Screenshot>
    </ResultContainer>
  );
};

export default Result;

// Styled components
const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Title = styled.h2`
  font-size: 16px;
  margin: 0;
  background-color: #3b5998;
  color:#fff;
  width: 300px;
  border-top-left-radius:4px;
  border-top-right-radius:4px;
  padding:2px

`;

const Screenshot = styled.div`
  width: 300px;
  padding: 0 0 20px 0;
  border: 1px solid #ccc;
  background: #f7f7f7;
  text-align: center;
`;

const WPM = styled.div`
  padding: 20px 0;

  font-size: 36px;
  color: #527a1e;
  background-color: #d3d3d3;
`;

const Stats = styled.div`
  margin-bottom: 20px;

  /* Add nth-child styling */
  & > div:nth-child(even) {
    background-color: #d3d3d3; /* Lighter gray for even rows */
  }

  /* & > div:nth-child(odd) {
    background-color: #e0e0e0; /* Darker gray for odd rows */
  } */
`;

const Stat = styled.div`
  font-size: 18px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
`;

const Keystrokes = styled.span`
  color: #000;
`;

const Accuracy = styled.span`
  color: #ff0000;
`;

const CorrectWords = styled.span`
  color: #527a1e;
`;

const WrongWords = styled.span`
  color: #ff0000;
`;

const ShareButton = styled.button`
  padding: 10px 20px;
  background-color: #3b5998;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #3b5998d9;
  }
`;
