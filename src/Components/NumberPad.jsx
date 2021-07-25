import React from 'react';
import { useSudokuContext } from '../context/SudokuContext';
import '../styles/numberpad.scss';

import { icons } from '../Utils/getIcons';

const NumberPad = () => {
  let {
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
    <div className="controls__container">
      <button className="controls__btn">New Game</button>
      <div className="controls__icons">
        <img src={icons.back} height="40" width="40" alt="back" />
        <img src={icons.cross} height="40" width="40" alt="back" />
        <img src={icons.bulb} height="40" width="40" alt="back" />
      </div>
      <div className="status__numbers">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
          return (
            <div
              className="status__number"
              key={number}
              onClick={() => onClickNumber(number)}
            >
              {number}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NumberPad;
