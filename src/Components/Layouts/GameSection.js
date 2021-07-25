import React, { useEffect } from 'react';
import { useSudokuContext } from '../../context/SudokuContext';
import '../../styles/game.scss';

const GameSection = () => {
  const {
    cellSelected,
    setCellSelected,
    initArray,
    setInitArray,
    editable,
    setEditable,
    gameArray,
    setGameArray,
    numberSelected,
  } = useSudokuContext();

  const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    const problemArray = [
      7, 0, 0, 9, 0, 0, 2, 0, 8, 0, 0, 0, 0, 0, 8, 4, 0, 9, 0, 0, 0, 2, 4, 0, 1,
      3, 0, 0, 1, 0, 0, 0, 6, 0, 9, 0, 4, 0, 0, 0, 0, 0, 0, 1, 0, 8, 0, 0, 0, 0,
      3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 2,
      0, 0, 1, 0, 0, 0,
    ];
    setInitArray(problemArray);
    setGameArray(problemArray);
    setEditable(() => {
      return problemArray.map((item) => {
        if (item === 0) return true;
        return false;
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getClassName = (indexOfArray, value, highlight) => {
    if (value !== 0) {
      if (initArray[indexOfArray] === 0) {
        return `game__cell game__cell--userfilled game__cell--${highlight}selected`;
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
        onClick={() => setCellSelected(indexOfArray)}
      >
        {value}
      </td>
    );
  };

  const unselectedCell = (indexOfArray, value) => {
    let className = 'game__cell';
    if (value !== 0) {
      if (initArray[indexOfArray] === 0) {
        className = 'game__cell game__cell--userfilled';
      } else {
        className = 'game__cell game__cell--filled';
      }
    }

    return (
      <td
        className={className}
        key={indexOfArray}
        onClick={() => setCellSelected(indexOfArray)}
      >
        {value ? value : ''}
      </td>
    );
  };

  const _Cells = (indexOfArray, value, box, indx) => {
    if (editable[indexOfArray]) {
      return (
        <td
          key={indx}
          className={`game__cell game__cell ${
            cellSelected === indexOfArray ? 'selected-box' : box
          }`}
          onClick={() => setCellSelected(indexOfArray)}
        >
          {value === 0 ? ' ' : value}
        </td>
      );
    }
    return (
      <td key={indx} className={`game__cell ${box}`}>
        {value}
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
