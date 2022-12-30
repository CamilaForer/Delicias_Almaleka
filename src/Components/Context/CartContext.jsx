import React, { createContext, useContext, useEffect, useState } from "react";

const cartContext = createContext();
//crear custom hook para obtener los datos del contexto
export const useCart = () => {
  const context = useContext(cartContext);
  return context;
};
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    // validar si existe el producto en el carrito, de ser así, añadir la cantidad al producto
    //Find devuelve el objeto que cumpla con la condición
    const exist = cart.find((item) => item.name === product.name);
    if (exist) {
      //Se crea un nuevo arreglo a partir del carrito actual
      const newCart = cart.map((item) => {
        //Si el objeto coincide con el repetido, actualiza la cantidad
        if (item.name === product.name) {
          //Spread operator permite separar cada elemento
          return { ...item, quantity: exist.quantity + 1 };
          //Si no pasa el item sin modificar
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      //Toma el contenido del cart y le añade un elemento nuevo(product) adicionando la
      //propiedad de cantidad
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const deleteCart = () => setCart([]);
  // estado que almacena el conteo de items en el carrito
  const [items, setItems] = useState(0);
  useEffect(() => {
    if (cart) {
      // acumula la cantidad de elementos presentes en el carrito
      const cartItems = cart.reduce((acc, curr) => {
        acc = acc + curr.quantity;
        return acc;
      }, 0);
      setItems(cartItems);
    }
  }, [cart]);

  // estado que almacena el total de la orden
  const [total, setTotal] = useState(0);

  useEffect(() => {
    //  calcula el total de la orden a partir del carrito actual
    const total = cart.reduce((acc, curr) => {
      acc = acc + curr.price * curr.quantity;
      return acc;
    }, 0);
    console.log(total);
    // actualiza el valor del total
    setTotal(total);
    // ejecuta el calculo cada vez que hay un cambio en el estado de "cart"
  }, [cart]);

  // actualiza la cantidad del producto la funcion recibe la posición del producto
  // y la cantidad actualizada
  const updateQuantity = (indexProduct, quantity) => {
    // recorre el carrito actual
    const updateItem = cart.map((item, index) => {
      // busca una la coinicidencia a través de la posición
      // cuando encuentra la coincidencia actualiza ese producto
      if (index == indexProduct) {
        return { ...item, quantity: quantity };
      } else {
        return item;
      }
    });
    console.log(updateItem);
    setCart(updateItem);
  };


  const deleteItem = (name) => {
    // filtra el contenido del carrito actual 
    // devuelve los que no cumplan con la condicion
    // se actualiza el estado del carrito
    const newCart = cart.filter((product) => name !== product.name);
    setCart(newCart);
  };

  return (
    <cartContext.Provider
      value={{
        addProduct,
        deleteCart,
        cart,
        items,
        total,
        updateQuantity,
        deleteItem,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
