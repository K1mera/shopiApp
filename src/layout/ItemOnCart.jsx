import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../store/slices/shop/thunks";
import { AddIcon } from "../icons/AddIcon";

export const ItemOnCart = ({ id, title, price, images, description }) => {
  // const { shoppingCart } = useSelector((state) => state.shop);

  const dispatch = useDispatch();

  const onAddItem = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div
      key={id}
      className="h-full gap-4 bg-white rounded-lg flex flex-col justify-center items-center p-4"
    >
      <img
        className="w-full rounded-lg h-86 object-cover"
        src={images[0]}
        alt={title}
      />
      <div className="flex flex-col w-full h-full justify-start gap-2 relative">
        <h3 className="font-bold text-lg">{title}</h3>
        <p>{description}</p>

        <div className="flex flex-row gap-4  justify-between items-start pt-4 ">
          <h2 className="font-bold text-2xl text-red-600">${price}</h2>
          <button
            className=" bg-white/60 rounded-full  w-6 h-6 m-2"
            onClick={() => onAddItem(id)}
          >
            <AddIcon
              className={
                "text-teal-600/70 hover:text-teal-300 transition duration-200 hover:scale-150 hover:rotate-180"
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
};
