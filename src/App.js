import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages';
// import Contact from './pages/contact';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/contact" element={<Contact/>}  />
    </Routes>
    </Router>
  );
}

export default App;
