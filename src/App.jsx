import React from 'react';
import Navs from './components/Navs.jsx';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Starred from './pages/Starred.jsx';
function App() {
  return (
    <div>
      <Navs />
    <Routes>
      <Route index element={<Home/> }/> 
      <Route exact path="starred" element={<Starred/>}/> 
      <Route/>
    </Routes>
    </div>
  );
}



export default App;

