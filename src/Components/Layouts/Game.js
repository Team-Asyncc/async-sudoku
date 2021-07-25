import React, { useEffect } from 'react';
import { useSudokuContext } from '../../context/SudokuContext';
import '../../styles/game.scss';

import GameSection from './GameSection';
import NumberPad from '../NumberPad';

const Game = () => {
  return (
    <div className="container">
      <header>Sudoku💥</header>
      <div className="innercontainer">
        <GameSection />
        <NumberPad />
      </div>
    </div>
  );
};

export default Game;
