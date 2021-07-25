import React from 'react';
import { useSudokuContext } from '../../context/SudokuContext';
import '../../styles/game.scss';

const GameSection = () => {
  const {
    cellSelected,
    setCellSelected,
    initArray,
    gameArray,
    numberSelected,
    setNumberSelected,
    ansArray,
  } = useSudokuContext();

  const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const handleOnCellSelected = (indexOfArray) => {
    if (gameArray[indexOfArray] === 0) setNumberSelected(-1);
    else setNumberSelected(gameArray[indexOfArray]);
    setCellSelected(indexOfArray);
  };

  const getClassName = (indexOfArray, value, highlight) => {
    let numberColor = 'wrong--number';
    if (ansArray[indexOfArray] === gameArray[indexOfArray]) {
      numberColor = 'correct--number';
    }
    if (value !== 0) {
      if (initArray[indexOfArray] === 0) {
        return `game__cell game__cell--userfilled game__cell--${highlight}selected ${numberColor}`;
      } else {
        return `game__cell game__cell--filled game__cell--${highlight}selected`;
      }
    } else {
      return `game__cell game__cell--${highlight}selected`;
    }
  };

  // Highlighting Logic - start
  const selectedCell = (indexOfArray, value, highlight) => {
    const className = getClassName(indexOfArray, value, highlight);
    return (
      <td
        className={className}
        key={indexOfArray}
        onClick={() => handleOnCellSelected(indexOfArray)}
      >
        {value}
      </td>
    );
  };

  const unselectedCell = (indexOfArray, value) => {
    let rowHighlight =
      indexOfArray % 9 === cellSelected % 9 ? 'box-highlight' : '';
    let colHighlight =
      Math.floor(indexOfArray / 9) === Math.floor(cellSelected / 9)
        ? 'box-highlight'
        : '';
    let className = `game__cell ${rowHighlight} ${colHighlight}`;
    let numberColor = 'wrong--number';
    if (ansArray[indexOfArray] === gameArray[indexOfArray]) {
      numberColor = 'correct--number';
    }
    if (value !== 0) {
      if (initArray[indexOfArray] === 0) {
        className = `game__cell game__cell--userfilled ${numberColor} ${rowHighlight} ${colHighlight}`;
      } else {
        className = `game__cell game__cell--filled ${rowHighlight} ${colHighlight}`;
      }
    }

    return (
      <td
        className={className}
        key={indexOfArray}
        onClick={() => handleOnCellSelected(indexOfArray)}
      >
        {value ? value : ''}
      </td>
    );
  };

  return (
    <section className="game">
      <table className="game__board">
        <tbody>
          {rows.map((row) => {
            return (
              <tr className="game__row" key={row}>
                {rows.map((column, indx) => {
                  const indexOfArray = row * 9 + indx;
                  const value = gameArray[indexOfArray];

                  if (cellSelected === indexOfArray) {
                    return selectedCell(indexOfArray, value, 'highlight');
                  }

                  if (numberSelected === gameArray[indexOfArray]) {
                    return selectedCell(indexOfArray, value, '');
                  }

                  return unselectedCell(indexOfArray, value);
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default GameSection;
