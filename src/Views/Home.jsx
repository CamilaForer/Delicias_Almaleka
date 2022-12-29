import Carouseel from "../Components/Carousel/Carouseel.jsx";
import Header from "../Components/Header/Header.jsx";
import ProductCard from "../Components/ProductCard/ProductCard.jsx";
import productsJson from "../data-products/products.json";
import { useCart } from "../Components/context/CartContext.jsx";

const products = productsJson.products;
export default function Home() {
  const context = useCart();
  console.log(context.getCart());
  return (
    <>
      <Header />
      <Carouseel />
      <p className="page_tittle">Productos destacados</p>
      <div className="container-fluid">
        {/*Contenedor de las tarjetas */}
        <div className="row  justify-content-center row-cols-auto ">
          {/*Creador del array con tarjetas por cada uno de los productos del JSON */}
          {products.map((product, index) => (
            <div key={index} className="text-center">
              <ProductCard
                key={index}
                name={product.name}
                img={product.img}
                price={product.price}
                addProduct={context.addProduct}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
