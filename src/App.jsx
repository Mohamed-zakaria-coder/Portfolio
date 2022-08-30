import React, {useEffect, useState} from 'react';
import './File.css';
import Nav from './Nav';
import Sales from './Sales';
import Home from './Home';
import Statistics from './Statistics';
import {BrowserRouter, Routes, Route, NavLink, Router} from "react-router-dom";

function App() {
  
  return (
    <div className='container'>
      <Nav/>
      <Routes>
        <Route path="/Home" element={< Home />}></Route>
        <Route path="/Sales" element={< Sales />}></Route>
        <Route path="/Stats" element={< Statistics />}></Route>
        <Route path="*" element={< Home />}></Route>
      </Routes>
    </div>
  )
}

export default App;
