import {useSelector} from "react-redux";
import {CardOrderPreview} from "../layout/CardOrderPreview";
import {Link} from "react-router-dom";


export const MyOrdersPage = () => {

  const { orders } = useSelector(state => state.orders)
  

  return (
    <section className="layoutBase">
      <h1>My orders</h1>
      {orders.length > 0 ? (
        orders.map((item, index) => (
          <Link key={index} to={`/my-orders/${item.id}`}>
          <div className="shadow-md border relative border-r-red-200/70 border-t-red-200/70 h-56 w-full rounded-xl p-4 flex justify-center items-center">
            <div className="w-[600px] p-4 items-start gap-4 mx-4 flex overflow-y-auto">
              {item.order.map((product) => (
                <CardOrderPreview
                  key={product.id}
                  title={product.title}
                  images={product.images}
                />
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-regular text-md">
                Purchase date: <span className="font-semibold text-teal-700">{item.date.day}/{item.date.month}/{item.date.year}</span>
              </p>
              <p className="font-regular text-md">
                Total amount: <span className="font-semibold text-teal-700">${item.totalAmount}</span>
              </p>
            </div>
          </div>
          </Link>
        ))
      ) : (
        <h1 className="font-regular font-montserrat text-2xl pt-6">
          No orders made yet. 😢
        </h1>
      )}
    </section>
  );
}
