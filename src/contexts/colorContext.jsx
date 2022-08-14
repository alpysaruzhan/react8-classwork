import { createContext, useState } from "react";

export const testContext = createContext();

export default function ColorState(props) {
  const [color, setColor] = useState("#ffc5b2");

  const contextValue = {
    color,
    changeColor() {
      console.log("change color");
      setColor("#0000ff");
    },
  };

  return (
    <testContext.Provider value={contextValue}>
      {props.children}
    </testContext.Provider>
  );
}
