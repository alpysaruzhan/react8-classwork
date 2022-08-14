import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import ColorState from "./contexts/colorContext";
import ShopState from "./contexts/shopContext";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import Shop from "./routes/shop";
import Products from "./routes/products";
import Cart from "./routes/cart";
import Counter from "./routes/counter";
import store from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopState>
      <ColorState>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="invoices" element={<Invoices />}>
                  <Route
                    index
                    element={
                      <main style={{ padding: "1rem" }}>
                        <h3>Выберите счет</h3>
                      </main>
                    }
                  />
                  <Route path=":invoiceId" element={<Invoice />} />
                </Route>

                <Route path="shop" element={<Shop />}>
                  <Route index element={<Products />} />
                  <Route path="cart" element={<Cart />} />
                </Route>

                <Route path="counter" element={<Counter />} />

                <Route
                  path="*"
                  element={
                    <main>
                      <p>Извините, страница не найдена.</p>
                    </main>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </ColorState>
    </ShopState>
  </React.StrictMode>
);
