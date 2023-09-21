import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";

import { getOrderById } from "../store/slices/orders/thunks";
import {CloseIcon} from "../icons";

export const SingleOrderPage = () => {

  const dispatch = useDispatch()
  const { orderId } = useParams()
  const { orders, onOrder } = useSelector(state => state.orders)

 const orderOpened = orders.filter((item) => orderId == item.id);
//  console.log(orderOpened[0]);

 
 dispatch( getOrderById(orderOpened[0]) );
 

  // console.log(orderId);
  return (
    <section className="layoutBase">
      <div className="flex flex-col gap-4 shadow-lg h-[calc(100vh-180px)] w-[500px] border border-r-red-200/70 border-t-red-200/70 rounded-xl p-4 relative">
        <Link to="/my-orders">
          <CloseIcon className="w-7 text-red-600 absolute right-4 top-4 transition hover:scale-125" />
        </Link>
        <section>
          <h1 className="font-bold">Order # {onOrder.id}</h1>
        </section>
        <section className="h-full w-full gap-4 flex flex-col flex-1">
          <div className="font-semibold">
            Purchase date: {onOrder.date.day}/{onOrder.date.month}/
            {onOrder.date.year}
          </div>
          <div className="overflow-hidden overflow-y-auto h-full">
            <ul className="flex flex-col gap-2 w-3/4">
              {onOrder.order.map((item) => (
                <li className="flex gap-4 h-24 overflow-hidden items-start">
                  <img
                    className="w-24 rounded-lg"
                    src={item.images[0]}
                    alt={item.title}
                  />
                  <div className="flex flex-col h-24 w-full text-sm">
                    <span className="font-semibold">{item.title}</span>
                    <div className="text-sm font-light break-all h-10 overflow-hidden ">
                      {item.description}
                    </div>

                    <span className="font-semibold">${item.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <h1 className="font-bold ">Total paid: ${onOrder.totalAmount}</h1>
        </section>
      </div>
    </section>
  );
}
