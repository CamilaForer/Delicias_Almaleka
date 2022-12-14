import React from 'react'
import Header from '../Components/Header/Header'
import { useCart } from "../Components/context/CartContext.jsx";
import OrderTable from '../Components/Cart/OrderTable';
import WhatsappButton from '../Components/Cart/WhatsappButton';
import Footer from '../Components/Footer/Footer';

export default function Cart() {
  const context = useCart();
  const cartContent = context.cart
  const total = context.total
  return (
    <div>
      <Header/>
      <div className="container">
        <p className='page_tittle'>Carrito de compras</p> 
        <div className="container-fluid">
          <OrderTable content={cartContent} />
          <WhatsappButton content={cartContent} total={total}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
