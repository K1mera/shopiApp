import React from 'react'
import { useDispatch } from 'react-redux';
import { addItems, getItemDetail } from '../store/slices/shop/thunks';
import {AddIcon} from '../icons/AddIcon';
import {handleShopList} from '../store/slices/shop/shopSlice';

export const Card = ({ id, title, price, category, images }) => {

  const dispatch = useDispatch()

  const onAddItem = ( item ) => {
    dispatch( addItems( item ))
    
  }

  const onDetail = ( item ) => {
    dispatch(getItemDetail( item ))
    dispatch(handleShopList( false ));
  }
  
  return (
    <div className="bg-white w-56 h-60 ">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 p-1 rounded-lg overflow-hidden text-black text-sm m-2 z-40">
          {category}
        </span>
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            onClick={() => onDetail(id)}
            className="object-cover cursor-pointer "
            src={images[0]}
            alt={title}
          />
        </div>
        <button
          className="absolute top-0 right-0 flex flex-col justify-center items-center bg-white/60 text-sm  rounded-full  w-6 h-6 m-2"
          onClick={() => onAddItem(id)}
        >
          <AddIcon
            className={
              "text-teal-600/70 hover:text-teal-300 transition duration-200 hover:scale-150 hover:rotate-180"
            }
          />
        </button>
        <p className="flex justify-between gap-2 items-center px-2">
          <button
            onClick={() => onDetail(id)}
            className="text-md font-regular truncate transition hover:text-red-400"
          >
            {title}
          </button>
          <span className="text-lg font-bold">${price}</span>
        </p>
      </figure>
    </div>
  );
}
