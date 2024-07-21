
import React from "react";
import { Word } from "../reducer";
import { StringSpan } from "../../Components/Styled/Span";

type WordsLinesProps = {
  strings: Word[];
  id: number;
  search: string;
  startIndex: number;
  numberOfWordsInEachLine: number;
};

const StringHandler: React.FC<WordsLinesProps> = ({
  strings,
  id,
  search,
  startIndex,
  numberOfWordsInEachLine,
}) => {
  const handleString = (
    lineNumber: number,
    numberOfWordsInEachLine: number
  ) => {
    return strings.map((string, index) => {
      if (
        string.id > lineNumber &&
        string.id <= lineNumber + numberOfWordsInEachLine
      ) {
        return (
          <StringSpan
            key={string.id}
            accept={string.accept}
            isActive={index === id && string.value.startsWith(search)}
            indexes={index === id}
          >
            {string.value + " "}
          </StringSpan>
        );
      }
      return null;
    });
  };

  const handleLinesRecursive = (
    startIndex: number,
    numberOfWordsInEachLine: number,
    accumulatedLines: JSX.Element[] = []
  ): JSX.Element[] => {
    if (startIndex >= strings.length) {
      return accumulatedLines;
    }
    const newLine = (
      <div key={startIndex}>
        {handleString(startIndex, numberOfWordsInEachLine)}
      </div>
    );

    return handleLinesRecursive(
      startIndex + numberOfWordsInEachLine,
      numberOfWordsInEachLine,
      [...accumulatedLines, newLine]
    );
  };

  return (
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
      {handleLinesRecursive(startIndex, numberOfWordsInEachLine)}
    </div>
  );
};

export default StringHandler;
