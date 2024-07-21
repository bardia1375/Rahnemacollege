// components/HandleString.tsx

import React from "react";
import styled from "styled-components";
import { Word, AcceptStatus } from "../Types/index";

const StringSpan = styled.span<{
  accept: AcceptStatus;
  isActive: boolean;
  indexes: boolean;
}>`
  white-space: nowrap;
  color: ${(props) =>
    props.accept === "true" ? "green" : props.accept === "false" ? "red" : ""};
  background-color: ${(props) =>
    props.isActive ? "gray" : props.indexes ? "red" : ""};
`;

interface HandleStringProps {
  strings: Word[];
  id: number;
  search: string;
  lineNumber: number;
  numberOfWordsInEachLine: number;
}

const HandleString: React.FC<HandleStringProps> = ({
  strings,
  id,
  search,
  lineNumber,
  numberOfWordsInEachLine,
}) => (
  <>
    {strings
      .filter((string) => string.id > lineNumber && string.id <= lineNumber + numberOfWordsInEachLine)
      .map((string, index) => (
        <StringSpan
          key={string.id}
          accept={string.accept}
          isActive={index === id && string.value.startsWith(search)}
          indexes={index === id}
        >
          {string.value + " "}
        </StringSpan>
      ))}
  </>
);

export default HandleString;
