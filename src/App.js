import './App.scss';
import Game from './Components/Layouts/Game';
import { SudokuProvider } from './context/SudokuContext';

function App() {
  return (
    <SudokuProvider>
      <Game />
    </SudokuProvider>
  );
}

export default App;
