import React from 'react';
import Pizza from './Pizza';
import OrderMenu from './OrderMenu';
import Modal from './Modal';
const Home = (props) => {
  return (
    <div className='container'>
      <div className='pizza-container'>
        {props.elements}
      </div>
      <div>
        <OrderMenu/>
      </div>
      {props.showBill
        ? <Modal
            handleChangePrice={props.handleChangePrice}
            selectedPrice={props.selectedPrice}
            selectedQuantity={props.selectedQuantity}
            handleChange={props.handleChange}
            selectedPizza={props.selectedPizza}
            saveInLocal={props.saveInLocal}
            cli={props.handleOpenBill}
            handleClose={props.handleClose}/>
        : null}
    </div>
  );
}

export default Home;
