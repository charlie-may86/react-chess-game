import React from "react";
import styled from "styled-components";
import squareFactory from "./squareFactory";

const rowArray = ["row-a", "row-b", "row-c", "row-d", "row-e", "row-f", "row-g", "row-h"];

const StyledBoard = styled.div`
  background-color: yellow;
  display: inline-flex;

  .dark {
    background-color: ${(pr) => pr.theme.darkColor};
  }

  .light {
      background-color: ${(pr) => pr.theme.lightColor};
  }

`;

export default function Board() {
  return (
    <StyledBoard className="board">
      {rowArray.map((className) => {
        return squareFactory(className, rowArray.indexOf(className));
      })}
    </StyledBoard>
  );
}
