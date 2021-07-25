import React, { useContext, createContext, useState } from 'react';

const SudokuContext = createContext({});

export const SudokuProvider = ({ children }) => {
  let [numberSelected, setNumberSelected] = useState(-1);
  let [gameArray, setGameArray] = useState([]);
  let [difficulty, setDifficulty] = useState('Easy');
  let [timer, setTimer] = useState();
  let [cellSelected, setCellSelected] = useState(-1);
  let [initArray, setInitArray] = useState([]);
  let [won, setWon] = useState(false);
  let [editable, setEditable] = useState([]);
  let [answer, setAnswer] = useState('wrong');
  let [ansArray, setAnsArray] = useState('wrong');

  return (
    <SudokuContext.Provider
      value={{
        editable,
        setEditable,
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
        answer,
        setAnswer,
        ansArray,
        setAnsArray,
      }}
    >
      {children}
    </SudokuContext.Provider>
  );
};

export const useSudokuContext = () => useContext(SudokuContext);
