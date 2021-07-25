import React from 'react';
import { useSudokuContext } from '../context/SudokuContext';
import '../styles/numberpad.scss';

const NumberPad = () => {
  let { numberSelected, cellSelected, setInitArray, initArray } =
    useSudokuContext();

  const onClickNumber = (numberCLicked) => {
    setInitArray(() => {
      const valu = [...initArray];
      valu[cellSelected] = parseInt(numberCLicked);
      return valu;
    });
  };
  return (
    <div className="status__numbers">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
        if (numberSelected === number.toString()) {
          return (
            <div
              className="status__number status__number--selected"
              key={number}
              onClick={() => onClickNumber(number.toString())}
            >
              {number}
            </div>
          );
        } else {
          return (
            <div
              className="status__number"
              key={number}
              onClick={() => onClickNumber(number.toString())}
            >
              {number}
            </div>
          );
        }
      })}
    </div>
  );
};

export default NumberPad;
