import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/nav.scss';

const Nav = () => {
  return (
    <nav>
      <header>
        <Link to="/">Sudoku</Link>
      </header>
      <div className="learn">
        <Link to="/learn" className="learn-to-play-btn">
          Learn To Play
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
