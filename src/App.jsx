import React from 'react';
import './File.css';
import Data from './Data';
import Pizza from './Pizza';
import Modal from './Modal';
import OrderMenu from './OrderMenu';
import Nav from './Nav';
import Sales from './Sales';
import Home from './Home';
import {BrowserRouter, Routes, Route, NavLink, Router} from "react-router-dom";

function App() {

  const elements = Data.map(item => {
    return <Pizza
      key={item.id}
      id={item.id}
      name={item.name}
      img={item.Image}
      size={item.size}
      click={handleOpenBill}/>
  })
  const [showBill,
    setShowBill] = React.useState(false)
  const [selectedPizza,
    setSelectedPizza] = React.useState(Data)
  function handleOpenBill(id) {
    setShowBill(true)
    setSelectedPizza(Data.filter(item => item.id === id)[0])

  }

  function saveInLocal() {
    const bills = JSON.parse(localStorage.getItem("bills")) || [];
    const date = new Date().toISOString();
         localStorage.setItem("bills", JSON.stringify([
        ...bills, {
          date,
          product_id: selectedPizza.id,
          quantity: Number(selectedQuantity),
          price: Number(selectedPrice),
          total: selectedQuantity *selectedPrice
        }
      ]))
      
    setShowBill(prev => !prev)
  }

  const [selectedQuantity,
    setSelected] = React.useState(0);

  function handleChange(event) {
    const {value} = event.target
    setSelected(() => value)
  }
  const [selectedPrice,
    setSelectedPice] = React.useState(0);

  function handleChangePrice(event) {
    const {value, size} = event.target
    setSelectedPice(() => value, size)

  }
  function handleClose() {
    setShowBill(false)
  }
  return (

    <div className='container'>
      <Nav/> {/* <div className='pizza-container'>{elements} </div>
     <OrderMenu/>
       {showBill
        ? <Modal
            handleChangePrice={handleChangePrice}
            selectedPrice={selectedPrice}
            selectedQuantity={selectedQuantity}
            handleChange={handleChange}
            selectedPizza={selectedPizza}
            save={saveInLocal}
            cli={handleOpenBill}
            handleClose={handleClose}/>
        : null} */}

      <Routes>
        <Route
          path="/Home"
          element={< Home elements = {
          elements
        }
        showBill = {
          showBill
        }
        handleChangePrice = {
          handleChangePrice
        }
        selectedPrice = {
          selectedPrice
        }
        selectedQuantity = {
          selectedQuantity
        }
        handleChange = {
          handleChange
        }
        selectedPizza = {
          selectedPizza
        }
        saveInLocal = {
          saveInLocal
        }
        cli = {
          handleOpenBill
        }
        handleClose = {
          handleClose
        } />}></Route>
        <Route path="/Sales" element={< Sales />}></Route>
      </Routes>
    </div>

  )
}

export default App;
