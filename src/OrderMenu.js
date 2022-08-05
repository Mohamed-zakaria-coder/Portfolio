import React from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import Data from './Data';

const OrderMenu = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <p>Order Menu</p>
        <BsPencilSquare className="order-icon" />
      </div>
      <div className="menu-content">
        <div className="each-order">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442945_960_720.jpg"
              className="menu-img"
            />
          </div>
          <div className="order-name-container">
            <p className="order-name">Pizza garlic</p>
            <div className="order-price">$10</div>
          </div>
          <div>
            <div className="total-each-price">
              <span className="quantity">×2</span>$20
            </div>
          </div>
        </div>
        <div className="each-order">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2018/04/07/15/03/pizza-3298685_960_720.jpg"
              className="menu-img"
            />
          </div>
          <div className="order-name-container">
            <p className="order-name">Pizza vegan</p>
            <div className="order-price">$32</div>
          </div>
          <div>
            <div className="total-each-price">
              <span className="quantity">×1</span>$32
            </div>
          </div>
        </div>
        <div className="each-order">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2016/04/21/22/50/pizza-1344720_960_720.jpg"
              className="menu-img"
            />
          </div>
          <div className="order-name-container">
            <p className="order-name">stone oven</p>
            <div className="order-price">$15</div>
          </div>
          <div>
            <div className="total-each-price">
              <span className="quantity">×3</span>$45
            </div>
          </div>
        </div>
        <div className="each-order">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/28/21/20/pizza-744405_960_720.jpg"
              className="menu-img"
            />
          </div>
          <div className="order-name-container">
            <p className="order-name">oven wood</p>
            <div className="order-price">$23</div>
          </div>
          <div>
            <div className="total-each-price">
              <span className="quantity">×1</span>$23
            </div>
          </div>
        </div>
        <div className="total-price-container">
          <h4 className="total-price-title">ٍSub Total</h4>
          <div className="total-price">$120</div>
        </div>

        <button className="charge-btn">Charge $120</button>
      </div>
    </div>
  );
};

export default OrderMenu;
