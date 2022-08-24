import React from 'react';
import OrderMenu from './OrderMenu';
import Modal from './Modal';
import {FiSearch} from 'react-icons/fi';
import Data, {categories} from './Data';
import Pizza from './Pizza';

const Home = (props) => {
  React.useEffect(() => {
    filterProducts(6)
  }, [])
  const [products,
    setProducts] = React.useState([])
  function filterProducts(id) {
    const prods = (Data.filter(item => item.category_id === id))
    setProducts(prods.map(item => {
      return <Pizza
        key={item.id}
        id={item.id}
        name={item.name}
        img={item.Image}
        size={item.size}
        click={handleOpenBill}
        categoryId={item.category_id}/>
    }))
  }

  function saveInLocal() {
    // const today = new Date('05 October 2011 14:48 UTC')
    
    const bills = JSON.parse(localStorage.getItem("bills")) || [];
    const date = new Date().toISOString();
    const products = billProducts.map(product => {
      return ({
        product_id: product.product_id,
        quantity: Number(product.quantity),
        price: Number(product.price),
        total: Number(product.total),
    

      })
    })
    localStorage.setItem("bills", JSON.stringify([
      ...bills, {
        date,
        products: [...products]
      }
    ]))

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
  function charge() {
    setBillProducts([])
  }
  const [showBill,
    setShowBill] = React.useState(false)
  const [selectedPizza,
    setSelectedPizza] = React.useState(Data)

  const [billProducts,
    setBillProducts] = React.useState([])

  function handleOpenBill(id) {
    setShowBill(true)
    setSelectedPizza(Data.filter(item => item.id === id)[0])

  }

  const category = categories.map(category => {
    return (
      <div className='each-category' onClick={() => filterProducts(category.id)}>
        <div>{category.icon}</div>
        <div>{category.name}</div>
      </div>
    )
  })




  
  const [pizza, setPizza] = React.useState([])
  const [value1, setValue1] = React.useState('')
  
  return (

    <div className="container grow">
      <div className='grow'>
        <div className='menu-category-parent'>
          <h2 className='menu-category-heading'>Menu Category
          </h2>
          {/* <div className='menu-input-parent'>

            <div className='search-parent'>
              <FiSearch className='search-icon'/>
            </div>
          </div> */}
        </div>
        <div className='categories-parent'>

          {category}
      
        </div>
        <div className='choose-sort-parent'>
          <h2 className='choose-order'>Choose Order
          </h2>

        </div>
        <div className="pizza-container">
          {products.length > 0 && products}
        </div>
      </div>

      <div>
        <OrderMenu
          charge={charge}
          billProducts={billProducts}
          setBillProducts={setBillProducts}
          saveInLocal={saveInLocal}/>
      </div>
      {showBill
        ? (<Modal
          handleChangePrice={handleChangePrice}
          selectedPrice={selectedPrice}
          selectedQuantity={selectedQuantity}
          handleChange={handleChange}
          selectedPizza={selectedPizza}
          saveInLocal={saveInLocal}
          cli={handleOpenBill}
          handleClose={handleClose}
          billProducts={billProducts}
          setBillProducts={setBillProducts}
          setShowBill={setShowBill}/>)

        : null}
    </div>
  );
};

export default Home;
