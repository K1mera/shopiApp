import { useDispatch, useSelector } from "react-redux";
import { CloseIcon } from "../icons";


import { ItemOnCart } from "./ItemOnCart";
import { closeDetail } from "../store/slices/shop/thunks";
import {deatailView} from "../store/slices/shop/shopSlice";

export const ProductDetail = () => {

  const dispatch = useDispatch();

  const { itemSelected } = useSelector((state) => state.shop);
   
    // close detail view, this is manage in the NavBar component, since is the layout of the site.
  const onCloseDetail = (value) => {
    dispatch(deatailView(value));
    // console.log(shoppingCart);
  };

  return (
    <aside className="sideMenuLayout">
      <section className="flex justify-between items-center">
        <h2 className="font-medium text-xl">Detail</h2>
        <button onClick={() => onCloseDetail(false)}>
          <CloseIcon
            className={
              "text-red-700/90 w-8 transition hover:scale-125 hover:text-red-600"
            }
          />
        </button>
      </section>
      <section className="flex flex-col gap-4">

        {
            itemSelected == {}   ?
            <h2>Select an item</h2> : 
            <ItemOnCart
              key={itemSelected.id}
              id={itemSelected.id}
              title={itemSelected.title}
              price={itemSelected.price}
              description={itemSelected.description}
              images={itemSelected.images}
              
            />
        }
      </section>
    </aside>
  );
};
