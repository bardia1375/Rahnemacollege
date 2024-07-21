import styled from "styled-components";
import { AcceptStatus } from "../../Types/Types";

export const StringSpan = styled.span<{
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
