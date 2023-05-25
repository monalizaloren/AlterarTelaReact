import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Componente da tela inicial
const Home = () => {
  return (
    <div>
      <h1>Tela Inicial</h1>
      <Link to="/tela2">Ir para a Tela 2</Link>
    </div>
  );
};

// Componente da tela 2
const Tela2 = () => {
  return (
    <div>
      <h1>Tela 2</h1>
    </div>
  );
};

// Componente principal
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tela2" element={<Tela2 />} />
      </Routes>
    </Router>
  );
};

export default App;
