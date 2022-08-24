import React from 'react';
import {Pie, Line} from 'react-chartjs-2';
import 'chart.js/auto';
import Data, { categories } from './Data';

const Statistics = () => {
  const bills = JSON.parse(localStorage.getItem("bills"))
  const totalEarnings = (bills && (bills.map(bill => bill.products.map(bill => bill.total))).map(bill => bill.length && [...bill].reduce((prev, curr) => prev + curr), 0).reduce((prev, curr) => {
    return (Number(prev) + Number(curr))
  }, 0))
  
  const date = new Date()
  function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1);
  }
  const productsQantityTotal = Data.map(product => {
    return {id: product.id, quantity: 0, total: 0, productName: product.name, img: product.Image ,}
  })
  const billDate = bills.map(bill => { 
    return {
      date : ((bill.date.slice(0,10))),
      total: 0,
    }
    // .products.map(product => 
  })
  const billDateEachDay = new Set(billDate.map(bill=>JSON.stringify(bill)))
   
  const parseInbillDateEachDay = Array.from(billDateEachDay).map(bill => JSON.parse(bill))
  
 
  bills.map(bill => bill.products.map(product => { 
    const totalEarningsDay = (parseInbillDateEachDay.filter(parseDate => parseDate.date === bill.date.slice(0,10))[0])
    totalEarningsDay.total += product.total
 
  }))
  bills.map(bill => bill.products.map(sale => {
    const theProduct = (productsQantityTotal.filter(product => product.id === sale.product_id)[0])
    theProduct.quantity += sale.quantity
    theProduct.total += sale.total
  }))

const firstDayCurrentMonth = getFirstDayOfMonth(date.getFullYear(), date.getMonth(),);
  var start = new Date();
  start.setHours(0, 0, 0, 0);
  const DateOfTheDayArr = bills.filter(bill => bill.date > start.toISOString())
  const totalEarningsOfTheDay = DateOfTheDayArr.length && DateOfTheDayArr
    .map(bill => bill.products.map(product => product.total))
    .map(bill => bill.length &&  [...bill].reduce((prev, curr) => prev + curr))
    .reduce((prev, curr) => {
      return (Number(prev) + Number(curr))
    })
  const totalMonthEarningsArr = bills.filter(bill => bill.date >= firstDayCurrentMonth.toISOString())
  const totalMonthEarnings = totalMonthEarningsArr.length && totalMonthEarningsArr
    .map(bill => bill.products.map(product => product.total))
    .map(bill => bill.length && [...bill].reduce((prev, curr) => prev + curr))
    .reduce((prev, curr) => {
      return (Number(prev) + Number(curr))
    })
  // const arrForLineChart = bills.filter(bill => bill.date >=
  // DateOfTheDayArr.map(e => e.date).toISOString())
  
  // const state = {   labels: Data.map(bill => bill.name),   datasets: [     {
  // label: 'Total Earnings',       backgroundColor: [         '#B21F00',
  // '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4'       ], hoverBackgroundColor: [
  // '#501800', '#4B5000', '#175000', '#003350', '#35014F'       ], data:
  // bills.map(bill => bill.products.map(bill => bill.total))     }]}
  const state1 = {
    labels: parseInbillDateEachDay.map(date => date.date),
    datasets: [
      {
        label: 'Total Earnings',
        backgroundColor: 'rgb(75, 192, 192)',
        hoverBackgroundColor: [
          '#501800', '#4B5000', '#175000', '#003350', '#35014F'
        ],
        data: parseInbillDateEachDay.map(e=>e.total)
      }
    ]
  }
  const billQunatity = Data.map(bill  => {
    return(
    {
      id: bill.id,
      quantity: [],
      categoryId : bill.category_id,
      name: ''
    }
    )
  })
  
  
  bills.map( bill => bill.products.map(product => {
    const categoryQuantity = billQunatity.filter(billQ => billQ.id === product.product_id)[0]
    categoryQuantity.quantity.push(product.quantity)
    const categoryId = categories.filter(category => category.id === categoryQuantity.categoryId)
    categories.map( categ => {
      const test = billQunatity.filter(billQ => billQ.categoryId === categ.id)
        })

  }))
  const data = {
    // labels: ,
    datasets: [ 
      {
        label: '# of Votes',
        data: billQunatity.map(e => e.quantity),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  };
  const quantityTest =  categories.map(category => {
    return (
      {
        id : category.id,
        name: category.name,
        quantity: 0
      }
    )
  })
  const dataQ = Data.map( bill => {
    return (
      {
      idQ : bill.id,
      idC : bill.category_id
      }
    )
  })
  bills.map( bill => bill.products.map( product => {
  const test =  billQunatity.map( e => e.quantity > 1 && quantityTest.filter(a => a.id === e.categoryId )) 
    
  }))

  
  
  
  bills.map(bill => bill.products.map(sale => {
    const theProduct = (productsQantityTotal.filter(product => product.id === sale.product_id)[0])
    theProduct.quantity += sale.quantity
    theProduct.total += sale.total
  }))
  
  const sortQuantity = (productsQantityTotal.sort((a, b) => a.quantity > b.quantity
  ? 1
    : -1))
  const bestQuantityName = sortQuantity.map(product => product.productName)
  const bestQuantityImg = sortQuantity.map(product => product.img)
  const everyQuantity = sortQuantity.map(qunatity => {
    return qunatity.quantity
  })
  const bestQuantity = everyQuantity[everyQuantity.length - 1]
  const sortTotal = (productsQantityTotal.sort((a, b) => a.total > b.total
    ? 1
    : -1))
  const everyTotal = sortTotal.map(product => {
    return product.total
  })
  const bestTotal = everyTotal[everyTotal.length - 1]
  const bestTotalName = sortTotal.map(product => product.productName)
  const bestTotalImg = sortTotal.map(product => product.img)

  
  return (
    <div className='statistics-parent'>
      <div className='total-earnings-parent'>
        <div className='total-earnings'>
          <div>Total Earnings</div>
          <div>${totalEarnings}</div>
        </div>
        <div className='total-earnings'>
          <div>Month Earnings</div>
          <div>${totalMonthEarnings}</div>
        </div>
        <div className='total-earnings'>
          <div>Today Earnings</div>
          <div>${totalEarningsOfTheDay}</div>
        </div>
      </div>
      <div className="stats-container">

        <div className='pie-chart'>
          <Pie data={data}/>
        </div>
        <div className='line-chart'>
          <Line
            data={state1}
            options={{
            title: {
              display: true,
              text: 'Today earnings',
              fontSize: 20
            },
            legend: {
              display: true
            }
          }}/>
        </div>
      </div>
      <div className='top-products-parent'>

        <div className='best-products-holder'>
          <div className='best-quantity-container'>
            <div>
              <h3 className='best-popular-product'>Most Popular Products</h3>
            </div>
            <div className='best-quantity-parent'>
              <img
                src={bestQuantityImg[sortQuantity.length - 1]}
                className="best-quantity-img"/>
              <div className='best-total-quantity-name'>{bestQuantityName[sortQuantity.length - 1]}</div>
              <div className='sold-units'>
                <h3>Sold Units</h3>
                <h2 className='top-total-quantity-products'>{bestQuantity}</h2>
              </div>
            </div>
            <div className='best-quantity-parent'>
              <img
                src={bestQuantityImg[sortQuantity.length - 2]}
                className="best-quantity-img"/>
              <div className='best-total-quantity-name'>{bestQuantityName[sortQuantity.length - 2]}</div>
              <div className='sold-units'>
                <h3>Sold Units</h3>
                <h2 className='top-total-quantity-products'>{everyQuantity[everyQuantity.length - 2]}</h2>
              </div>
            </div>
            <div className='best-quantity-parent'>
              <img
                src={bestQuantityImg[sortQuantity.length - 3]}
                className="best-quantity-img"/>
              <div className='best-total-quantity-name'>{bestQuantityName[sortQuantity.length - 3]}</div>
              <div className='sold-units'>
                <h3>Sold Units</h3>
                <h2 className='top-total-quantity-products'>{everyQuantity[everyQuantity.length - 3]}</h2>
              </div>
            </div>
            <div className='best-quantity-parent'>
              <img
                src={bestQuantityImg[sortQuantity.length - 4]}
                className="best-quantity-img"/>
              <div className='best-total-quantity-name'>{bestQuantityName[sortQuantity.length - 4]}</div>
              <div className='sold-units'>
                <h3>Sold Units</h3>
                <h2 className='top-total-quantity-products'>{everyQuantity[everyQuantity.length - 4]}</h2>
              </div>
            </div>
            <div className='best-quantity-parent'>
              <img
                src={bestQuantityImg[sortQuantity.length - 5]}
                className="best-quantity-img"/>
              <div className='best-total-quantity-name'>{bestQuantityName[sortQuantity.length - 5]}</div>
              <div className='sold-units'>
                <h3>Sold Units</h3>
                <h2 className='top-total-quantity-products'>{everyQuantity[everyQuantity.length - 5]}</h2>
              </div>
            </div>
          </div>
          <div className='best-total-container'>
            <div className='haedings-parent'>
              <h3 className='most-profitable-products'>Most profitable products</h3>
            </div>
            <div className='best-total-parent'>
              <img src={bestTotalImg[sortTotal.length - 1]} className="best-total-img"/>
              <div className='best-total-quantity-name'>{bestTotalName[sortTotal.length - 1]}</div>
              <div className='total-profit'>
                <h3>Total Profit</h3>
                <h2 className='top-total-quantity-products'>{bestTotal}</h2>
              </div>
            </div>
            <div className='best-total-parent'>
              <img src={bestTotalImg[sortTotal.length - 2]} className="best-total-img"/>
              <div className='best-total-quantity-name'>{bestTotalName[sortTotal.length - 2]}</div>
              <div className='total-profit'>
                <h3>Total Profit</h3>
                <h2 className='top-total-quantity-products'>{everyTotal[everyTotal.length - 2]}</h2>
              </div>
            </div>
            <div className='best-total-parent'>
              <img src={bestTotalImg[sortTotal.length - 3]} className="best-total-img"/>
              <div className='best-total-quantity-name'>{bestTotalName[sortTotal.length - 3]}</div>
              <div className='total-profit'>
                <h3>Total Profit</h3>
                <h2 className='top-total-quantity-products'>{everyTotal[everyTotal.length - 3]}</h2>
              </div>
            </div>
            <div className='best-total-parent'>
              <img src={bestTotalImg[sortTotal.length - 4]} className="best-total-img"/>
              <div className='best-total-quantity-name'>{bestTotalName[sortTotal.length - 4]}</div>
              <div className='total-profit'>
                <h3>Total Profit</h3>
                <h2 className='top-total-quantity-products'>{everyTotal[everyTotal.length - 4]}</h2>
              </div>
            </div>
            <div className='best-total-parent'>
              <img src={bestTotalImg[sortTotal.length - 5]} className="best-total-img"/>
              <div className='best-total-quantity-name'>{bestTotalName[sortTotal.length - 5]}</div>
              <div className='total-profit'>
                <h3>Total Profit</h3>
                <h2 className='top-total-quantity-products'>{everyTotal[everyTotal.length - 5]}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
