import React from 'react';

const Pizza = (props) => {

  return (
    <div className='pizza-parent'>
    <div className='each'>
      <div className='img-container'><img src={props.img} onClick={() => props.click(props.id)} className="pizza-img"/></div>
      <p>{props.name}</p>
      <div className='select-holder'>
        <div className='name-price'>{props
            .size
            .map(e => {
              return (
                <option key={Math.random()}>
                  {e.name}={e.price}$</option>
              )
            })}</div>
      </div>
    </div>
    </div>

  );
}

export default Pizza;
