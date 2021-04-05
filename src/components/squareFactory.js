import React from "react";
import styled from "styled-components";
import square from "../images/box.png";

const StyledSquare = styled.div`
  border: 3px solid black;
  background-color: green;
  display: flex;
`;

const rowArray = ['square-eight', 'square-seven', 'square-six', 'square-five', 'square-four', 'square-three', 'square-two', 'square-one'];

export default function Square(className) {
  return (
    <div className = {className}>
      {rowArray.map((row) => {
        return (
          <StyledSquare className = {[row, className]}>
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
