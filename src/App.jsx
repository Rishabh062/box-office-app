import React from 'react'; 
import {Route, Routes } from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import Home from './pages/Home.jsx';
import Show from './pages/Show.jsx';
import Starred from './pages/Starred.jsx';

const theme={
  mainColors:{
    blue: '#2400ff',
    gray: '#808080',
    dark: '#353535',
  },
};

function App() {
  return (
  <ThemeProvider theme={theme}>
    <Routes>
      <Route index element={<Home/> }/> 
      <Route exact path="starred" element={<Starred/>}/> 
      <Route exact path="/show/:id" element={<Show/>}/>
      <Route element="Not found"/>
    </Routes>
    </ThemeProvider>
  );
}



export default App;

