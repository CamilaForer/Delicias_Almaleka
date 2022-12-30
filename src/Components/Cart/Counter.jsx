import React, { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const Counter = ({ quantity,updateQuantity ,indexProduct}) => {
  const [counter, setCounter] = useState(quantity);
  const substractItem = () => {
    if (counter === 1) {
      setCounter(99);
      // Envia la posicion del producto y la cantidad para actualizar el contexto
      updateQuantity(indexProduct,99)
    } else {
      setCounter(counter - 1);
      updateQuantity(indexProduct,counter - 1)
    }
  };
  const addItem = () => {
    if (counter === 99) {
      setCounter(1);
      updateQuantity(indexProduct,1)
    } else {
      const plusCounter = counter + 1;
      setCounter(plusCounter);
      updateQuantity(indexProduct,plusCounter)
    }
  };
  return (
    <section className="counter">
      <button onClick={substractItem} className="minusButton">
        <FaMinusCircle />
      </button>
      <p className="quantity">{counter}</p>
      <button onClick={addItem} className="plusButton">
        <FaPlusCircle />
      </button>
    </section>
  );
};

export default Counter;
