import { useEffect, useContext } from "react";
import { shopContext } from "../contexts/shopContext";
import ProductCard from "../components/shop/ProductCard";

export default function Products(props) {
  const context = useContext(shopContext);
  const items = context.items;

  useEffect(() => {
    context.getItems();
  }, []);

  return (
    <div className="container p-5">
      <div className="row">
        {items.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 d-flex p-0" key={item.id}>
            <ProductCard product={item} addToCart={context.addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}
