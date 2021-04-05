import React from "react";
import styled from "styled-components";
import square from "../images/box.png";

const StyledSquare = styled.div`
  border: 3px solid black;
  background-color: green;
  display: flex;
`;

const rowArray = [
  "square-eight",
  "square-seven",
  "square-six",
  "square-five",
  "square-four",
  "square-three",
  "square-two",
  "square-one",
];

export default function Square(className, number) {
  return (
    <div className={className}>
      {rowArray.map((row) => {
        let x = "";
        if (rowArray.indexOf(row) % 2 === 1 && number % 2 === 1) {
          x = "light";
        } else if (rowArray.indexOf(row) % 2 === 1 && number % 2 === 0) {
          x = "dark";
        } else if (rowArray.indexOf(row) % 2 === 0 && number % 2 === 1) {
          x = "dark";
        } else if (rowArray.indexOf(row) % 2 === 0 && number % 2 === 0) {
          x = "light";
        }
        return (
          <StyledSquare className={[className, row, x]}>
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
