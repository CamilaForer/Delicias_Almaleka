import React, { createContext, useContext, useState } from "react";

const cartContext = createContext();
//crear custom hook para obtener los datos del contexto
export const useCart = () => {
  const context = useContext(cartContext);
  return context;
};
function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const addProduct = (product) => {
    //Spread operator permite separar cada elemento
    //Toma el contenido del cart y le añade un elemento nuevo(product)
    setCart([...cart, product]);
  };
  const deleteCart = () => setCart([]);
  const getCart = () => {
    return cart;
  };
  return (
    <cartContext.Provider value={{ addProduct, deleteCart, getCart }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
