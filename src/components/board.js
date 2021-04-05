import React from "react";
import styled from "styled-components";
import squareFactory from "./squareFactory";

const rowArray = ["a", "b", "c", "d", "e", "f", "g", "h"];

const StyledBoard = styled.div`
  background-color: yellow;
  display: inline-flex;

  .a .dark {
    background-color: ${(pr) => pr.theme.darkColor};
  }
  .b .light {
    background-color: pink;
  }
`;

export default function Board() {
  return (
    <StyledBoard className="board">
      {rowArray.map((row) => {
        return squareFactory(row);
      })}
    </StyledBoard>
  );
}
