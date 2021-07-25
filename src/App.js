import './App.scss';
import Game from './Components/Layouts/Game';
import NumberPad from './Components/NumberPad';
import { SudokuProvider } from './context/SudokuContext';

function App() {
  return (
    <SudokuProvider>
      <div className="App">
        <Game />
      </div>
    </SudokuProvider>
  );
}

export default App;
