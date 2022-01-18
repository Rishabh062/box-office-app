import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Starred from './pages/Starred.jsx';
function App() {
  return (
  
    <Routes>
      <Route index element={<Home/> }/> 
      <Route exact path="starred" element={<Starred/>}/> 
      <Route/>
    </Routes>
  );
}



export default App;

