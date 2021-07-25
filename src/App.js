import './App.scss';
import Game from './Components/Layouts/Game';
import { SudokuProvider } from './context/SudokuContext';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './Components/Layouts/Nav';
import LearnToPlay from './Components/Layouts/LearnToPlay';

function App() {
  return (
    <Router>
      <SudokuProvider>
        <Nav />
        <Route exact path="/" component={Game} />
        <Route path="/learn" component={LearnToPlay} />
      </SudokuProvider>
    </Router>
  );
}

export default App;
