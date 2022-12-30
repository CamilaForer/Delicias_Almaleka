import "./ProductCard.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ProductCard({ name, img, price,description, addProduct }) {
  //Con esta función tomamos el nombre y el precio para enviarlo al carrito 
  const handleClick = () => {
    addProduct({
      "name":name,
      "price":price 
    })
  }
  return (
    <Card style={{ width: "18rem", display: "flex", marginBottom: "35px" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>${price}</Card.Text>
        <Button variant="primary" onClick={handleClick}>Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}
