import React from 'react';
import '../../styles/learn.scss';

const LearnToPlay = () => {
  return (
    <div className="learn__container">
      <header>Learn To play Sudoku</header>
      <div className="content-container">
        <div className="heading">Sudoku Rule No 1: Use Numbers (1-9)</div>
        <div className="content">
          <img src="./sudoku-img.png" alt="sudokuimg" />
          <ul>
            <li>Sudoku is played on a grid of 9 x 9 spaces.</li>
            <li>
              Within the rows and columns are 9 “squares” (made up of 3 x 3
              spaces).
            </li>
            <li>
              Each row, column and square (9 spaces each) needs to be filled out
              with the numbers 1-9, without repeating any numbers within the
              row, column or square.
            </li>
            <li>
              Does it sound complicated? As you can see from the image below of
              an actual Sudoku grid, each Sudoku grid comes with a few spaces
              already filled in; the more spaces filled in, the easier the game
              – the more difficult Sudoku puzzles have very few spaces that are
              already filled in.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LearnToPlay;
