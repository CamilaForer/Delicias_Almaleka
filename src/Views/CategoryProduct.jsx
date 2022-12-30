import productsJson from "../data-products/products.json";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard/ProductCard";
import Header from '../Components/Header/Header'
import { useCart } from "../Components/context/CartContext.jsx";
import Footer from "../Components/Footer/Footer";

const products = productsJson.products;
function CategoryProduct() {
  const context = useCart();
  const { category } = useParams();
  const nameCategory = products.filter(product => product.type == category)
  return (
    <div>
      <Header/>
      <p className="page_tittle">{category}</p>
      <div className="container-fluid">
        {/*Contenedor de las tarjetas */}
        <div className="row  justify-content-center row-cols-auto ">
          {nameCategory.map((product, index) => (
            <div key={index} className="text-center">
              <ProductCard
                key={index}
                name={product.name}
                img={product.img}
                description={product.description}
                price={product.price}
                addProduct={context.addProduct}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default CategoryProduct