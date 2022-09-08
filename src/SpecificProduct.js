import React, {useState, useEffect} from 'react';
import {NavLink, useParams} from 'react-router-dom';

const SpecificProduct = () => {
  const idParam = useParams();
  const [products,
    setProducts] = useState([])
  useEffect(() => {
    fetch(`https://makeup-api.herokuapp.com/api/v1/products/${Number(idParam.id)}.json`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])


  return (
    <div>
      <div className='specific-product'>

        <div className='main-content-parent'>
          <h2>{products.name}</h2>
          <img src={products.api_featured_image}/>
        </div>
        <div className='product-category item'>{products.category
}</div>
        <div className='product-color-parent item'>{products.product_colors && products
            .product_colors
            .map(product => {
              return (
                <div>
                  <div
                    className='product-color'
                    style={{
                    backgroundColor: product.hex_value
                  }}></div>
                </div>
              )
            })}</div>
        <div className='product-price item'>Price:{products.price}$</div>
        <div className='product-brand item'>Brand:{products.brand}</div>
        <p className='product-description item'>{products.description}</p>
      </div>
    </div>
  );
}

export default SpecificProduct;
