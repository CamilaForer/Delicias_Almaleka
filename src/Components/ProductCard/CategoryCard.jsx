import Card from "react-bootstrap/Card";
import "./ProductCard.scss";

function CategoryCard({ type, img }) {
  return (
    <Card style={{ width: "20rem", display: "flex", marginBottom: "35px", border: "0px" }}>
      <Card.Link className="link-dark" href={"#/category/" + type}>
        <Card.Img src={img} alt="Card image" className="opacity-50" />
        <Card.ImgOverlay>
          <Card.Title className="position-absolute top-50 start-50 translate-middle">
            {type}
          </Card.Title>
        </Card.ImgOverlay>
      </Card.Link>
    </Card>
  );
}
export default CategoryCard;
