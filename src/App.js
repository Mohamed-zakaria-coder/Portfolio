import React from 'react';
import './App.css';
import Props from './Props'
import './File.css'
import Data from "./Data"
import Navbar from './Navbar';



function App(){
  const myElements = Data.map(e => 
    <Props 
    title = {e.title}
    location = {e.location}
    maps= {e.googleMapsUrl}
    startDate = {e.startDate}
    endDate = {e.endDate}
    description= {e.description}
    img= {e.imageUrl}
    />
    )
  return(
  <div className='container'>
    <Navbar />
    {myElements}

  </div>
  )
  }
  
export default App;
