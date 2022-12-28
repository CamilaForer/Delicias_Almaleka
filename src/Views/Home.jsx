import Carouseel from "../Components/Carousel/Carouseel.jsx";
import Header from "../Components/Header/Header.jsx";
import ProductCard from "../Components/ProductCard/ProductCard.jsx";
import productsJson from "../data-products/products.json";
import Footer from "../Components/Footer/Footer.jsx";

const products = productsJson.products;
export default function Home() {
  return (
    <>
      <Header />
      <Carouseel />
      <p className="page_tittle">Productos destacados</p>
      {products.map((product) => (
        <ProductCard
          name={product.name}
          img={product.img}
          price={product.price}
        />
      ))}
      {/* <Footer/> */}
    </>
  );
}
