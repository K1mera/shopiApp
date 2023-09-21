import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CartIcon } from "../icons";
import { deatailView, handleShopList, } from "../store/slices/shop/shopSlice";
import { CheckingBag, MyOrder, ProductDetail } from "../layout";
import {getLogout} from "../store/slices/auth/thunks";
import {openShopList} from "../store/slices/shop/thunks";

export const NavBar = () => {

  const dispatch = useDispatch()
  const { countTotal, shopListOpen, onItemDetail } = useSelector( state => state.shop )
  const { user, status } = useSelector(state => state.auth)
  const { orderWindow } = useSelector(state => state.orders);

  const onShopList = () => {
    if (shopListOpen !== false) return dispatch(openShopList(false));
    dispatch(openShopList(true))
    dispatch(deatailView(false))
  };

  const onLogout = () => {
    dispatch(getLogout())
  }



  return (
    <>
      {!shopListOpen ? "" : <CheckingBag />}
      {!onItemDetail ? "" : <ProductDetail />}
      {!orderWindow ? "" : <MyOrder />}

      <nav className="hidden lg:flex h-14 w-full bg-white/90 flex-row space-x-4 items-center px-4 justify-between fixed top-0 z-50 font-montserrat">
        <div className="flex flex-row space-x-4 items-center px-4">
          <NavLink to="/" className="font-black font-montserrat text-lg ">
            Shopi
          </NavLink>
          <NavLink
            to="/"
            // className="font-regular text-md text-gray-700 font-monserrat"
            className={({ isActive }) =>
              `font-regular text-md font-monserrat hover:text-red-400 ${
                !isActive
                  ? "text-gray-700"
                  : "underline decoration-red-400 underline-offset-4"
              }`
            }
          >
            All
          </NavLink>
          <NavLink
            to="clothes"
            className={({ isActive }) =>
              `font-regular text-md font-monserrat hover:text-red-400 ${
                !isActive
                  ? "text-gray-700"
                  : "underline decoration-red-400 underline-offset-4"
              }`
            }
          >
            Clothes
          </NavLink>
          <NavLink
            to="electronics"
            className={({ isActive }) =>
              `font-regular text-md font-monserrat hover:text-red-400 ${
                !isActive
                  ? "text-gray-700"
                  : "underline decoration-red-400 underline-offset-4"
              }`
            }
          >
            Electronics
          </NavLink>
          <NavLink
            to="furniture"
            className={({ isActive }) =>
              `font-regular text-md font-monserrat hover:text-red-400 ${
                !isActive
                  ? "text-gray-700"
                  : "underline decoration-red-400 underline-offset-4"
              }`
            }
          >
            Furniture
          </NavLink>
          <NavLink
            to="toys"
            className={({ isActive }) =>
              `font-regular text-md font-monserrat hover:text-red-400 ${
                !isActive
                  ? "text-gray-700"
                  : "underline decoration-red-400 underline-offset-4"
              }`
            }
          >
            Shoes
          </NavLink>
          <NavLink
            to="others"
            className={({ isActive }) =>
              `font-regular text-md font-monserrat hover:text-red-400 ${
                !isActive
                  ? "text-gray-700"
                  : "underline decoration-red-400 underline-offset-4"
              }`
            }
          >
            Others
          </NavLink>
        </div>

        {/* !TODO SearchBar */}

        {/* <div>
          <input type="text" />
        </div> */}

        <div className="flex flex-row space-x-4 items-center px-4">
          {/* <img src={user.photoURL} alt="" /> */}
          <p className="font-medium text-md text-red-400 font-monserrat">
            {user.displayName ? user.displayName : ""}
          </p>
          <NavLink
            to="my-orders"
            className={({ isActive }) =>
              `font-regular text-md font-monserrat hover:text-red-400 ${
                !isActive
                  ? "text-gray-700"
                  : "underline decoration-red-400 underline-offset-4"
              }`
            }
          >
            My Orders
          </NavLink>
          <NavLink
            to="my-account"
            className={({ isActive }) =>
              `font-regular text-md font-monserrat hover:text-red-400 ${
                !isActive
                  ? "text-gray-700"
                  : "underline decoration-red-400 underline-offset-4"
              }`
            }
          >
            My Account
          </NavLink>
          {status === "online" ? (
            <p onClick={ onLogout } className="font-semibold text-md font-monserrat hover:text-red-400 hover:cursor-pointer">
              Logout
            </p>
          ) : (
            <NavLink
              to="login"
              className={({ isActive }) =>
                `font-regular text-md font-monserrat hover:text-red-400 ${
                  !isActive
                    ? "text-gray-700"
                    : "underline decoration-red-400 underline-offset-4"
                }`
              }
            >
              Login
            </NavLink>
          )}
          <button
            onClick={() => onShopList()}
            className="flex items-center gap-0.5"
          >
            <CartIcon className={"text-teal-700 w-7"} />
            <span className="bg-gray-200 px-2 rounded-lg">{countTotal}</span>
          </button>
        </div>
      </nav>
    </>
  );
};
