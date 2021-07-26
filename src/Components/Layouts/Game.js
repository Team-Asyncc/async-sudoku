import React, { useEffect } from 'react';
import { useSudokuContext } from '../../context/SudokuContext';
import '../../styles/game.scss';

import GameSection from './GameSection';
import NumberPad from '../NumberPad';

import { getQueAns } from '../../Utils/GetQueAns';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Game = () => {
  const { setInitArray, setGameArray, setAnsArray } = useSudokuContext();
  const [value, setValue] = useLocalStorage('gameState', null);

  const startGame = (isNewGame = false) => {
    if (isNewGame || !value) {
      const [quesArray, solvedArray] = getQueAns();
      setAnsArray(solvedArray);
      setInitArray(quesArray);
      setGameArray(quesArray);
      localStorage.removeItem('gameState');
    } else {
      const { solved, ques, init } = value;
      console.log(solved);
      setAnsArray(solved);
      setInitArray(init);
      setGameArray(ques);
    }
  };

  useEffect(() => {
    startGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="innercontainer">
        <GameSection />
        <NumberPad
          onNewGameClick={() => {
            startGame(true);
          }}
          saveToLocalStorage={setValue}
        />
      </div>
    </div>
  );
};

export default Game;
