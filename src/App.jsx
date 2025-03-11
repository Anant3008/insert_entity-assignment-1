// src/App.jsx

import React from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css'; // Import global styles
import AddBook from './AddBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-book' element={<AddBook/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
