import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart.value);

  return (
    <div className="container py-5 px-md-5">
      <ul className="list-group">
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center ps-0"
          >
            <div>
              <button className="btn btn-text">
                <i className="bi bi-x"></i>
              </button>
              {item.brand} {item.model}
            </div>
            <div className="d-flex align-items-center">
              <span>{item.price * item.quantity}</span>
              <input
                type="number"
                min="1"
                className="form-control ms-2"
                value={item.quantity}
                onChange={(event) => {
                  log(event.target.value);
                }}
              />
            </div>
          </li>
        ))}

        <li className="list-group-item text-end">
          Итого:
          <span v-price="shopStore.cartTotal" />
        </li>
      </ul>

      <div className="d-flex justify-content-between mt-3">
        <button className="btn btn-warning">Очистить корзину</button>

        <Link className="btn btn-success" to="/shop/checkout">
          Оформить заказ
        </Link>
      </div>
    </div>
  );
}
