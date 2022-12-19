import React from 'react'
import productsJson from '../data-products/products.json'
import {Card} from 'react-bootstrap'; 

const products = productsJson.products;
console.log(products)
export default function ProductCard(img, productName, price) {
  return (
    <div className='product-card-image'>
      {/* <img src=''/>
      <div classNameName='name-price-counter'>
        <p>{productName} </p>
        <p>{price}</p>
      </div> */}
      <button>Agregar al carrito</button>
      <Card/>
    </div>
  )
}
