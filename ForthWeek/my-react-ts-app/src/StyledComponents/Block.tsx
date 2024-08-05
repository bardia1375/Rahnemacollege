import styled from "styled-components";

export const Square = styled.div<{ color: string }>`
  display:flex;
  align-items:center;
  justify-content:center;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color};
  border: 2px solid #1d0641g;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;
