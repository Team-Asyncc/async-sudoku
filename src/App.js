import './App.scss';
import Game from './Components/Game';
import { SudokuProvider, useSudokuContext } from './context/SudokuContext';

function App() {
  const state = useSudokuContext();
  console.log(state);
  return (
    <SudokuProvider>
      <div className="App">
        <Game />
      </div>
    </SudokuProvider>
  );
}

export default App;
