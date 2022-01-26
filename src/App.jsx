import React from 'react'; 
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Show from './pages/Show.jsx';
import Starred from './pages/Starred.jsx';
function App() {
  return (
  
    <Routes>
      <Route index element={<Home/> }/> 
      <Route exact path="starred" element={<Starred/>}/> 
      <Route exact path="/show/:id" element={<Show/>}/>
      <Route element="Not found"/>
    </Routes>
  );
}



export default App;

