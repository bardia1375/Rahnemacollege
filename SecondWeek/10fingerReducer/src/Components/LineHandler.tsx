// components/LineHandler.tsx

import React from "react";
import HandleString from "./HandleString";
import { Word } from "../Types/index";

interface LineHandlerProps {
  strings: Word[];
  id: number;
  search: string;
  numberOfWordsInEachLine: number;
}

const LineHandler: React.FC<LineHandlerProps> = ({
  strings,
  id,
  search,
  numberOfWordsInEachLine,
}) => {
  const handleLinesRecursive = (
    startIndex: number,
    accumulatedLines: JSX.Element[] = []
  ): JSX.Element[] => {
    if (startIndex >= strings.length) {
      return accumulatedLines;
    }
    const newLine = (
      <div key={startIndex}>
        <HandleString
          strings={strings}
          id={id}
          search={search}
          lineNumber={startIndex}
          numberOfWordsInEachLine={numberOfWordsInEachLine}
        />
      </div>
    );

    return handleLinesRecursive(startIndex + numberOfWordsInEachLine, [
      ...accumulatedLines,
      newLine,
    ]);
  };

  return <>{handleLinesRecursive(0)}</>;
};

export default LineHandler;
