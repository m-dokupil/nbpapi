import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CurrencyPage from './pages/CurrencyPage';
import CalculatorPage from './pages/CalculatorPage';
import { GlobalStyle } from './components/styled/GlobalStyle';
import { Navbar, NavLink } from './components/styled/Navbar';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/calculator">Currency Calculator</NavLink>
        </Navbar>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/currency/:code" element={<CurrencyPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
