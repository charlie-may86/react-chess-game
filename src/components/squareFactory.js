import React from "react";
import styled from "styled-components";
import square from '../images/box.png';

const StyledSquare = styled.div`
  border: 1px solid black;
  background-color: green;
  display: inline-block;
`;

console.log(square)

export default function Square() {
  return (
    <StyledSquare>
      <img src={square} alt='chess square'/>
    </StyledSquare>
  );
}
