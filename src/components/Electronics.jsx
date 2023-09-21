import { useDispatch, useSelector } from "react-redux";
import { Card } from "../layout";
import { useEffect } from "react";
import { getItemsByCategory } from "../store/slices/shop/thunks";

export const Electronics = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsByCategory(2));
  }, []);

  const { items } = useSelector((state) => state.shop);

  return (
    <div className="layoutBase">
      <h1 className="sectionTitle">Electronics</h1>
      <section className="flex flex-row gap-4 flex-wrap justify-center items-center">
        {items.map((products) => (
          <Card
            key={products.id}
            id={products.id}
            title={products.title}
            price={products.price}
            description={products.description}
            category={products.category.name}
            images={products.images}
          />
        ))}
      </section>
    </div>
  );
};
