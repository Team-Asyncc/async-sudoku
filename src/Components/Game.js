import React from 'react';
import { useSudokuContext } from '../context/SudokuContext';

const Game = () => {
  const state = useSudokuContext();
  console.log(state);
  return <div>{JSON.stringify(state)}</div>;
};

export default Game;
