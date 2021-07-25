import './App.scss';
import Game from './Components/Game';
import NumberPad from './Components/NumberPad';
import { SudokuProvider, useSudokuContext } from './context/SudokuContext';

function App() {
  const state = useSudokuContext();
  // console.log(state);
  return (
    <SudokuProvider>
      <div className="App">
        <Game />
        <NumberPad />
      </div>
    </SudokuProvider>
  );
}

export default App;
