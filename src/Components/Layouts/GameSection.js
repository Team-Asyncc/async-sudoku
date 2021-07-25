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
  } = useSudokuContext();

  const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const handleOnCellSelected = (indexOfArray) => {
    setCellSelected(indexOfArray);
    setNumberSelected(-1);
  };

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
        onClick={() => handleOnCellSelected(indexOfArray)}
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
        onClick={() => handleOnCellSelected(indexOfArray)}
      >
        {value ? value : ''}
      </td>
    );
  };

  // const _Cells = (indexOfArray, value, box, indx) => {
  //   if (editable[indexOfArray]) {
  //     return (
  //       <td
  //         key={indx}
  //         className={`game__cell game__cell ${
  //           cellSelected === indexOfArray ? 'selected-box' : box
  //         }`}
  //         onClick={() => setCellSelected(indexOfArray)}
  //       >
  //         {value === 0 ? ' ' : value}
  //       </td>
  //     );
  //   }
  //   return (
  //     <td key={indx} className={`game__cell ${box}`}>
  //       {value}
  //     </td>
  //   );
  // };

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
