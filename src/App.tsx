import React, { useState } from 'react';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router';
import Manual from './pages/Manual';
import Breakie from './pages/breakie/Breakie';
import InputBrakie from './pages/input/InputBrakie';
import './App.css';
import Menu from './components/menu/menu';

function App() {
   
  return (
    <div className='app'>
      <Menu/>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/manual' element={<Manual />} />
        <Route path='/input' element={<InputBrakie />} />
        <Route path='/breakie'  element={<Breakie />} />
   
      </Routes>
    </div>
  );
}

export default App;
