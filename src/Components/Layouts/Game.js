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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="innercontainer">
        <GameSection ansArray={ansArray} />
        <NumberPad />
      </div>
    </div>
  );
};

export default Game;
