import React from 'react'
import './ProductCard.scss'
import productsJson from '../../data-products/products.json'
import Cupcake from '../../img/cupcakeBasico.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const products = productsJson.products;

export default function ProductCard() {
  return (
    <Card style={{ width: '15rem', display: 'flex', marginBottom: '35px' }}>
      <Card.Img variant="top" src={Cupcake} />
      <Card.Body>
        <Card.Title>{products.name}</Card.Title>
        console.log(products)
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>

  ) 
}
