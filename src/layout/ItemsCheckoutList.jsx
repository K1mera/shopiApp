import React from 'react'

export const ItemsCheckoutList = ({ id, title, price, count }) => {

    
  return (
    <div className="w-full flex gap-2 justify-between">
      <p className='text-lg'>{title} </p>
      {count > 1 ? <span className='text-lg'>x{count}</span> : ''}
      <p className='text-lg font-semibold'>${price * count}</p>
    </div>
  );
}
