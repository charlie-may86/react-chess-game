import React from "react";
import styled from "styled-components";
import square from "../images/box.png";

const StyledSquare = styled.div`
  border: 3px solid black;
  background-color: green;
  display: flex;
`;

const rowArray = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Square() {
  return (
    <div>
      {rowArray.map((row) => {
        return (
          <StyledSquare>
            <img src={square} alt="chess square" />
          </StyledSquare>
        );
      })}
    </div>
  );
}

// return rowArray.map((row) => {
//     return (
//       <StyledSquare>
//         <img src={square} alt="chess square" />
//       </StyledSquare>
//     );
//   });
