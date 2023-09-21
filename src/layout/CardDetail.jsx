import { useDispatch, useSelector } from "react-redux";
import { addItems, removeCartItem } from "../store/slices/shop/thunks";

export const CardDetail = ({ id, title, price, images, description }) => {
  // const { shoppingCart } = useSelector((state) => state.shop);

  const dispatch = useDispatch();


  return (
    <div
      key={id}
      className="h-36 gap-4 bg-white rounded-lg flex justify-between items-center p-4"
    >
      <img
        className="w-[40%] rounded-lg h-full object-cover"
        src={!images ? '' : images[0]}
        alt={title}
      />
      <div className="flex flex-col w-[60%] h-full">
        <h3>{title}</h3>
        <h2 className="font-bold text-lg">${price}</h2>
        
        <div className="flex flex-row gap-4 pt-1">
          
        </div>
      </div>
    </div>
  );
};
