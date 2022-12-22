import React from 'react'
import Carouseel from '../Components/Carousel/Carouseel.jsx'
import Header from '../Components/Header/Header.jsx'
import Menu from '../Components/Menu'
import ProductCard from '../Components/ProductCard/ProductCard.jsx'
import Footer from '../Components/Footer/Footer.jsx'

export default function Home() {
  return (
    <>
      <Header/>
      <Menu/>
      <Carouseel/>
      <p className='page_tittle'>Productos destacados</p>
      <ProductCard/>
      <Footer/>
    </>
  )
}
