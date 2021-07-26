import React, { useEffect } from 'react';
import { useSudokuContext } from '../context/SudokuContext';
import '../styles/numberpad.scss';
import { icons } from '../Utils/getIcons';
import Timer from './Timer';

const NumberPad = ({ onNewGameClick, saveToLocalStorage, timerProps }) => {
  let {
    cellSelected,
    initArray,
    gameArray,
    setGameArray,
    setNumberSelected,
    ansArray,
    setWon,
    rewind,
    setRewind,
  } = useSudokuContext();

  //Rewind
  const Rewind = () => {
    if (rewind.length > 0) {
      setGameArray(() => {
        const valu = [...gameArray];
        const lastRewind = rewind.slice(-1)[0];
        valu[lastRewind.index] = lastRewind.value;
        return valu;
      });

      setRewind(() => {
        const valu = [...rewind];
        valu.pop();
        return valu;
      });
    }
  };

  const storeRewind = () => {
    setRewind(() => {
      const valu = [...rewind];
      valu.push({ index: cellSelected, value: gameArray[cellSelected] });
      return valu;
    });
  };
  //rewind end
  const onClickNumber = (numberCLicked) => {
    if (initArray[cellSelected] !== 0) return;
    if (_isSolved()) {
      setWon(true);
    }
    setNumberSelected(Number(numberCLicked));
    storeRewind();
    setGameArray(() => {
      const valu = [...gameArray];
      valu[cellSelected] = numberCLicked;
      return valu;
    });
    storeRewind();
  };

  useEffect(() => {
    saveToLocalStorage({ solved: ansArray, ques: gameArray, init: initArray });
  }, [gameArray, ansArray, initArray, saveToLocalStorage]);

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
      <Timer {...timerProps} />
      <button className="controls__btn" onClick={() => onNewGameClick()}>
        New Game
      </button>
      <div className="controls__icons">
        <img
          src={icons.back}
          height="40"
          width="40"
          alt="back"
          onClick={Rewind}
        />
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
