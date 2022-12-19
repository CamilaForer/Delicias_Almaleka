import React from 'react'
import Carouseel from '../Components/Carouseel'
import Header from '../Components/Header'
import ProductCard from '../Components/ProductCard'

export default function Home() {
  return (
    <>
      <Header/>
      <Carouseel/>
      <p className='page_tittle'>Productos destacados</p>
      <ProductCard/>
    </>
  )
}
