import styled from "styled-components";

type AcceptStatus = "true" | "false" | "";

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

const StyledInput = styled.input`
  width: 50%;
  border-top: 1px solid #575757;
  height: 50px;
  border-right: 1px solid #6b7a89;
  border-bottom: 1px solid #70869b;
  border-left: 1px solid #525a62;
  font-size: 2rem;
  line-height: 1em;
  background: url(https://img.10fastfingers.com/img/layout/sprite-main.png) 0px -60px
    no-repeat;
  font-family: Times New Roman, Times, serif;
  color: #333;
`;
const Container = styled.div`
  margin: 100px auto;
  width: max-content;
  min-width: 1100px;
  font-size: 2rem;
`;
const Tools = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: center;
  gap: 8px;
`;
export { StringSpan, StyledInput, Container, Tools };
