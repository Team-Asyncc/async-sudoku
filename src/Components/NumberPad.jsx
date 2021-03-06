import React, { useEffect, useRef } from 'react';
import { useSudokuContext } from '../context/SudokuContext';
import '../styles/numberpad.scss';
import { icons } from '../Utils/getIcons';

import ReactTooltip from 'react-tooltip';
import Timer from './Timer';

const NumberPad = ({ onNewGameClick, saveToLocalStorage, timerProps }) => {
  const timerRef = useRef(timerProps);

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

  //Erase Logic
  const Erase = () => {
    setGameArray(
      gameArray.map((value, idx) => (idx === cellSelected ? 0 : value))
    );
    storeRewind();
  };

  //Hint Logic
  const Hint = () => {
    setGameArray(
      gameArray.map((value, idx) =>
        idx === cellSelected ? ansArray[cellSelected] : value
      )
    );
    storeRewind();
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
    saveToLocalStorage({ solved: ansArray, ques: gameArray, init: initArray });
    if (_isSolved()) {
      setWon(true);
      timerRef.current.pause();
    }
  }, [gameArray, ansArray, initArray, saveToLocalStorage, setWon]);

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
          data-tip="Rewind"
          data-class="tooltip__special__class"
        />
        <img
          src={icons.cross}
          height="40"
          width="40"
          alt="back"
          data-tip="Erase"
          onClick={Erase}
          data-class="tooltip__special__class"
        />
        <img
          src={icons.bulb}
          height="40"
          width="40"
          alt="back"
          data-tip="Hint"
          onClick={() => {
            Hint();
          }}
          data-class="tooltip__special__class"
        />
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
      <ReactTooltip class="tooltip__special__class" effect="solid" />
    </div>
  );
};

export default NumberPad;
