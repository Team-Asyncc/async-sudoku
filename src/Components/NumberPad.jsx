import React from 'react';
import { useSudokuContext } from '../context/SudokuContext';
import '../styles/numberpad.scss';

const NumberPad = () => {
  let {
    numberSelected,
    cellSelected,
    initArray,
    gameArray,
    setGameArray,
    setNumberSelected,
    ansArray,
    setWon,
  } = useSudokuContext();

  const onClickNumber = (numberCLicked) => {
    if (initArray[cellSelected] !== 0) return;
    if (_isSolved()) {
      setWon(true);
    }
    setNumberSelected(Number(numberCLicked));
    setGameArray(() => {
      const valu = [...gameArray];
      valu[cellSelected] = numberCLicked;
      return valu;
    });
  };

  const _isSolved = () => {
    if (
      gameArray.every(
        (cell, cellIndex) => ansArray[cellIndex] === gameArray[cellIndex]
      )
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="status__numbers">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
        return (
          <div
            className={
              numberSelected === number
                ? 'status__number status__number--selected'
                : 'status__number'
            }
            key={number}
            onClick={() => onClickNumber(number)}
            // onMouseDown={() => setNumberSelected(number)}
            // onMouseUp={() => setNumberSelected(-1)}
          >
            {number}
          </div>
        );
      })}
    </div>
  );
};

export default NumberPad;
