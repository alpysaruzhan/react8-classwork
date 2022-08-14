import { createContext, useState } from "react";

export const shopContext = createContext();
const shopURL = "http://localhost:5000/products";

export default function ShopState(props) {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const contextValue = {
    items,
    getCartQuantity: () => {
      const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);
      console.log("quantity:", quantity);
      return quantity;
    },
    async getItems() {
      const res = await fetch(shopURL);
      const data = await res.json();
      setItems(data);
    },
    addToCart(newItem) {
      const index = cart.findIndex((item) => item.id === newItem.id);

      if (index === -1) {
        setCart((prevValue) => {
          const newArr = [...prevValue, newItem];
          return newArr;
        });
      } else {
        setCart((prevValue) => {
          const newValue = prevValue.map((p, i) => {
            if (i === index)
              return {
                ...p,
                quantity: p.quantity + 1,
              };
            return p;
          });

          return newValue;
        });
      }
    },
  };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
}
