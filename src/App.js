import './App.scss';
import Game from './Components/Game';
import Ans from './Components/ans'
import { SudokuProvider, useSudokuContext } from './context/SudokuContext';

function App() {
  const state = useSudokuContext();
  console.log(state);
  return (
    <SudokuProvider>
      <div className="App">
        <Game />
      </div>
      <Ans/>
    </SudokuProvider>

  );
}

export default App;
