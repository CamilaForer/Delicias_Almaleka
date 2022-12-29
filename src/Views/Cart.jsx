import React from 'react'
import Header from '../Components/Header/Header'
import { useCart } from "../Components/context/CartContext.jsx";
import OrderTable from '../Components/OrderTable';

export default function Cart() {
  const context = useCart();
  const cartContent = context.getCart()
  return (
    <div>
      <Header/>
      <p className='page_tittle'>Carrito de compras</p> 
      <div className="container-fluid">
        <OrderTable content={cartContent} />
        
      </div>
    </div>
  )
}
