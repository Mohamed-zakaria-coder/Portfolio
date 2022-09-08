import React, { useEffect, useState}  from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function TopProducts() {
    const [topProductsData, setTopProductsData] = useState([])
    useEffect(() => {
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick")
        .then(res => res.json())
        .then(data => setTopProductsData(data))
         
    }, [])
  const Navigate = useNavigate()
    const topProducts = topProductsData.map(product =>  {
        return (
          
            <div className='topProducts-info' onClick={() => Navigate(`/products/${product.product_type}/${product.id}`)}>
                <div className='topProductsImg-container'>
                <img src={product.image_link}/>
                </div>
                <div className='topProducts-name'>{product.name}</div>
                <div>Brand:{product.brand}</div>
                <div>Category:{product.category}</div>
                <div>${product.price}</div>
            </div>
        )
    })
  return (
    <div className='topProducts-container'>
      <h2 className='topProducts-heading'>TOP PRODUCTS</h2>
      <div className='topProducts-info-parent'> 
        {topProducts}
      </div>
    </div>
  )
}
