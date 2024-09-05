import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CardSection from './components/CardSection';
import Marketplace from './pages/Marketplace';
import ProductDetail from './pages/ProductDetail';
import Minting from './pages/Minting';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<><Hero /><CardSection /></>} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/minting" element={<Minting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
