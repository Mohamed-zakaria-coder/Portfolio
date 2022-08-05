import React from 'react';
import Data from './Data';
const Sales = () => {
  const [processNumber,
    setProcessNumber] = React.useState(0)

  
  const bills = JSON.parse(localStorage.getItem("bills"))
  const TotalSales = bills !== null
    ? [...bills].reverse().map((bill, i) => {
      const product = Data.filter(product => product.id == bill.product_id)[0]
      
      return (
        <tr className="table-body" key={Math.random()}>
          <td className='bill-id'>
            {product.name}</td>
          <td className='bill-price'>
            {bill.price}
          </td>
          <td className='bill-quantity'>{bill.quantity}</td>
          <td className='bill-total'>{bill.total}</td>
          <td className='bill-total'>{bill.date}</td>
         
        </tr>
      )
    })
    : ""

  return (
    <div className='sales-parent'>
      {bills != null
        ? <>    <div className='sales-header'>
            <caption className='sales-caption'>Sales Statistics</caption>
            <div><h4>Total Earnings</h4>
                <h3>{bills.reduce((current,element) => {
                  return current + element.total
                },0 )}</h3>
            </div>
            </div>
         <table className='sales-table'>

            <thead>
              <tr className='table-head'>
                <th>Product Name</th>
                <th>Product-Price</th>
                <th>Product Quantity</th>
                <th>Total - Price</th>
                <td>Date</td>
                

              </tr>
            </thead>
            <tbody>
              {TotalSales}
            </tbody>
          </table>
          </>
        : <h2 className='no-bills'>There Are No Bills</h2>}
    </div>
  );
}

export default Sales;
