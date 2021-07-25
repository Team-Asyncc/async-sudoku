import React, { useEffect, useState } from 'react';
import { useSudokuContext } from '../../context/SudokuContext';
import '../../styles/game.scss';

import GameSection from './GameSection';
import NumberPad from '../NumberPad';

import { getQueAns } from '../../Utils/GetQueAns';

const Game = () => {
  const { setInitArray, setGameArray } = useSudokuContext();

  const [ansArray, setAnsArray] = useState([]);

  const startGame = () => {
    const [quesArray, solvedArray] = getQueAns();
    setAnsArray(solvedArray);
    setInitArray(quesArray);
    setGameArray(quesArray);
  };

  useEffect(() => {
    startGame();
  }, []);

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
