import React from 'react'
import './ProductCard.scss'
import productsJson from '../../data-products/products.json'
import Cupcake from '../../img/cupcakeBasico.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const products = productsJson.products;
console.log(products)
export default function ProductCard({img, productName, price}) {
  return (
    <Card style={{ width: '15rem', display: 'flex', marginBottom: '35px' }}>
      <Card.Img variant="top" src={Cupcake} />
      <Card.Body>
        <Card.Title>Cupcake</Card.Title>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>

  )
}
