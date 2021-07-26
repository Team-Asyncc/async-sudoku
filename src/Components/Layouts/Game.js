import React, { useEffect } from 'react';
import { useSudokuContext } from '../../context/SudokuContext';
import '../../styles/game.scss';

import GameSection from './GameSection';
import NumberPad from '../NumberPad';

import { getQueAns } from '../../Utils/GetQueAns';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import { useStopwatch } from 'react-timer-hook';

const Game = () => {
  const { setInitArray, setGameArray, setAnsArray, setRewind, won, setWon } =
    useSudokuContext();
  const [value, setValue] = useLocalStorage('gameState', null);

  const { seconds, minutes, hours, reset, pause } = useStopwatch({
    autoStart: true,
  });

  const startGame = (isNewGame = false) => {
    reset();
    setWon(false);
    if (isNewGame || !value) {
      const [quesArray, solvedArray] = getQueAns();
      setAnsArray(solvedArray);
      setInitArray(quesArray);
      setGameArray(quesArray);
      localStorage.removeItem('gameState');
    } else {
      const { solved, ques, init } = value;
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
      {console.log(won)}
      {won && (
        <div className="won__container" onClick={() => setWon(false)}>
          <h1>You Won 🎉</h1>
        </div>
      )}
      <div className="innercontainer">
        <GameSection />
        <NumberPad
          onNewGameClick={() => {
            startGame(true);
            setRewind([]);
          }}
          saveToLocalStorage={setValue}
          timerProps={{ hours, minutes, seconds, pause }}
        />
      </div>
    </div>
  );
};

export default Game;
