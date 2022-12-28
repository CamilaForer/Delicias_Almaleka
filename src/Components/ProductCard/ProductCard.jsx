import React from 'react'
import './ProductCard.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProductCard({name,img,price}) {
 
  return (
    <Card style={{ width: '15rem', display: 'flex', marginBottom: '35px' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {price}
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>

  ) 
}
