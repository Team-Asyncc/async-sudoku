import React from 'react';
import { useSudokuContext } from '../context/SudokuContext';
// import './styles/game.scss';
export const initGameArray = [
  [7, 0, 0, 9, 0, 0, 2, 0, 8],
  [0, 0, 0, 0, 0, 8, 4, 0, 9],
  [0, 0, 0, 2, 4, 0, 1, 3, 0],
  [0, 1, 0, 0, 0, 6, 0, 9, 0],
  [4, 0, 0, 0, 0, 0, 0, 1, 0],
  [8, 0, 0, 0, 0, 3, 0, 4, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 7, 2, 0, 0, 1, 0, 0, 0],
];
const Game = () => {
  const state = useSudokuContext();
  console.log('state=', state);
  const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  state.setInitArray(initGameArray);
  console.log(state.initArray);
  const _Cells = (indexOfArray, value, box, selected) => {
    if (value === 0) {
      return (
        <>
          {
            <td
              className={
                state.cellSelected === indexOfArray ? 'selected-box' : box
              }
              onClick={() => state.setCellSelected(indexOfArray)}
            ></td>
          }
        </>
      );
    }
    return <td className={box}> {value}</td>;
  };
  return (
    <section className="game">
      <table className="game-board">
        <tbody>
          {rows.map((row) => {
            return (
              <tr className="game-row" key={row}>
                {rows.map((column, indx) => {
                  const indexOfArray = row * 9 + indx;
                  const value = initGameArray[row][column];
                  if (value === 0) {
                    return _Cells(indexOfArray, value, 'filled-box');
                  }
                  return _Cells(indexOfArray, value, 'blank-box');
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Game;