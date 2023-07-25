// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Income from './pages/Income';
import Expense from './pages/Expense';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Income</Link>
          </li>
          <li>
            <Link to="/expenses">Expenses</Link>
          </li>
        </ul>
      </nav>

      <Routes>

        <Route path="/" element={ <Income /> } />
        <Route path="/expenses" element={ <Expense />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
