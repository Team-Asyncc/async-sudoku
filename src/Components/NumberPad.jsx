import React from 'react';
import { useSudokuContext } from '../context/SudokuContext';
import '../styles/numberpad.scss';

const NumberPad = () => {
  let {
    numberSelected,
    cellSelected,
    setInitArray,
    initArray,
    setNumberSelected,
  } = useSudokuContext();

  const onClickNumber = (numberCLicked) => {
    setInitArray(() => {
      const valu = [...initArray];
      valu[cellSelected] = numberCLicked;
      return valu;
    });
  };
  return (
    <div className="status__numbers" onMouseLeave={() => setNumberSelected(-1)}>
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
            onMouseDown={() => setNumberSelected(number)}
            onMouseUp={() => setNumberSelected(-1)}
          >
            {number}
          </div>
        );
      })}
    </div>
  );
};

export default NumberPad;
