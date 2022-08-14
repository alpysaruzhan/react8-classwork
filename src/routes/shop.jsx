import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { shopContext } from "../contexts/shopContext";

function selectProductQuantity(state) {
  return state.cart.value.reduce((acc, item) => acc + item.quantity, 0);
}

export default function Shop(props) {
  const context = useContext(shopContext);
  const [cartQuantity, setCartQuantity] = useState(0);
  const cart = useSelector((state) => state.cart.value);
  const quantityProduct = useSelector(selectProductQuantity);

  return (
    <div className="container p-5">
      <div className="d-flex justify-content-between">
        <Link to="/shop">Магазин</Link>
        <Link to="/shop/cart">В корзине: {quantityProduct}</Link>
      </div>
      <Outlet />
    </div>
  );
}
