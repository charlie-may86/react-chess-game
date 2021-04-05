import React from "react";
import styled from "styled-components";

const StyledSquare = styled.div`
  border: 1px solid black;
  background-color: green;
  display: inline-block;
`;

export default function square() {
  return (
    <StyledSquare>
      <img src="src/images/box.png" />
    </StyledSquare>
  );
}
