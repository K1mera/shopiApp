import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTotalPrice, handleShopList } from "../store/slices/shop/shopSlice";
import { ItemsAdded, TotalPrice } from "../layout";

import { CloseIcon } from "../icons";


export const CheckingBag = () => {

  const dispatch = useDispatch();

  const { shoppingCart, TotalPriceAmt } = useSelector((state) => state.shop);

 
  

  // Close check bag 
  const onCloseCheckCart = (value) => {
    dispatch( handleShopList(value) )
  }


  return (
    <aside className="sideMenuLayout">
      <section className="flex justify-between items-center">
        <h2 className="font-medium text-xl">My Order</h2>
        <button onClick={ () => onCloseCheckCart(false) }>
        <CloseIcon className={"text-red-700/90 w-8 transition hover:scale-125 hover:text-red-600"} />
        </button>
      </section>
      <section className="flex flex-col gap-4">
        {/* render the elements saved in the api if the length of list is greater than 0 */}
        {
        shoppingCart.length > 0 ? (
          shoppingCart.map((items) => (
            <ItemsAdded
              key={items.id}
              id={items.id}
              title={items.title}
              price={items.price}
              description={items.description}
              images={items.images}
              count={items.count}
            />
          ))
        ) : (
          <h2>No items added yet</h2>
        )}
      </section>
      <section className="fixed bottom-1 right-0  w-[400px]">
      { shoppingCart.length > 0 ? 
        <TotalPrice /> :
        ''
      }
        </section>
    </aside>
  );
}
