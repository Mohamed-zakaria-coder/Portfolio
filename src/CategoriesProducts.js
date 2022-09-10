import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Data from './Data'; 
const CategoriesProducts = () => {
  const [filteredProducts, setFilteredProducts] = useState([])
  const params = useParams();
  const Navigate = useNavigate()
  const [loading,
    setLoading] = useState(false)
  const [products,
    setProducts] = useState([])
  useEffect(() => {
    setLoading(true)
    fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${params.product_type}`)
      .then(res => res.json())
      .then(data => (setFilteredProducts(data),setProducts(data)))
    setLoading(false)
    setSelectCategory('all')
    setSelectBrand('all')
  }, [])
  
  function HandleFilters(){
      if(selectBrand != "all"){
        setFilteredProducts(products.filter(product => product.brand == selectBrand)
        )
      }else{
        setFilteredProducts(products)
      }
      if(selectCategory != "all"){
        setFilteredProducts(products.filter(product => product.category == selectCategory)
        )
      }
      if(selectCategory != "all" && selectBrand !="all"){
        setFilteredProducts(products.filter(product => product.category == selectCategory && product.brand == selectBrand))
      }
  }
 
  const [selectCategory,
    setSelectCategory] = useState('')
  const [selectBrand,
    setSelectBrand] = useState('')
  function ChangeCategory(e) {
    setSelectCategory(e.target.value)
    
  }
  function ChangeBrand(e) {
    setSelectBrand(e.target.value)
  
  }
  const filterProducts = products.filter(prod => prod.product_type === params.product_type)
  const filterCategroy = new Set(filterProducts.map(product => product.category))
  const filterBrand = new Set(filterProducts.map(product => product.brand))
  const productsPageHeading = Data.filter(prod => prod.name.toLowerCase() === params.product_type)

  return (
    <div className='category-products-container'>
      <hr></hr>
      {productsPageHeading.map(product => {
        return (
          <h3 className='product-page-name'>{product.name}s</h3>
        )
      })}
      <div className='select-parent'>
        <div class="select-brand-parent">
          <label htmlFor="select-brand" className='select-brand-label'>Brand</label>
          <select onChange={ChangeBrand} onClick={HandleFilters} className="select-brand" value={selectBrand}>
            <option value='all'>All</option>
            {([...filterBrand].filter(prod => prod != null).map(product => {
              return (
                <option>{product}</option>
              )
            }))}

          </select>
        </div>
        <div className='select-category-parent'>
          <label htmlFor="select-category" className='select-category-label'>Category</label>
          <select
            onClick={HandleFilters}
            onChange={ChangeCategory}
            value={selectCategory}
            className="select-category">
            <option value='all'>All</option>

            {([...filterCategroy].filter(prod => prod != null).map(product => {
              return (
                <option>{product}</option>
              )
            }))}
          </select>
        </div>
      </div>
      <div className='products-container'>

        {loading
          ? <div className='loading'>
              "Loading..."
            </div>
          : ''}
        {filteredProducts.map(product => {
            return (
              <div className='products-parent'>
                <div
                  class="products-card"
                  onClick={() => Navigate(`/products/${product.product_type}/${product.id}`)}>
                  <div className='img-container'>
                    <img src={product.api_featured_image}/></div>
                  <p className='product-name product'>{product.name}</p>
                  <p className='product-brand product'>Brand:{product.brand}</p>
                  <p className='product-category product'>Category:{product.category}</p>
                  <p className='product-price product'>Price:{product.price}$</p>
                </div>
              </div>
            )
            })}
      </div>
    </div>
  );
}

export default CategoriesProducts;
