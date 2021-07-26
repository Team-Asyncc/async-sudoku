import React, { useContext, createContext, useState } from 'react';

const SudokuContext = createContext({});

export const SudokuProvider = ({ children }) => {
  let [numberSelected, setNumberSelected] = useState(-1);
  let [gameArray, setGameArray] = useState([]);
  let [difficulty, setDifficulty] = useState('Easy');
  let [timer, setTimer] = useState();
  let [cellSelected, setCellSelected] = useState(-1);
  let [initArray, setInitArray] = useState([]);
  let [rewind, setRewind] = useState([{}]);
  let [won, setWon] = useState(false);
  let [ansArray, setAnsArray] = useState('wrong');

  return (
    <SudokuContext.Provider
      value={{
        numberSelected,
        setNumberSelected,
        gameArray,
        setGameArray,
        difficulty,
        setDifficulty,
        timer,
        setTimer,
        cellSelected,
        setCellSelected,
        initArray,
        setInitArray,
        won,
        setWon,
        ansArray,
        setAnsArray,
        rewind,
        setRewind,
      }}
    >
      {children}
    </SudokuContext.Provider>
  );
};

export const useSudokuContext = () => useContext(SudokuContext);
