import productsJson from "../data-products/products.json";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard/ProductCard";
import Header from '../Components/Header/Header'
import { useCart } from "../Components/context/CartContext.jsx";

const products = productsJson.products;
function CategoryProduct() {
  const context = useCart();
  console.log(context.getCart());
  const { category } = useParams();
  console.log(category)
  const nameCategory = products.filter(product => product.type == category)
  console.log(nameCategory)
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
                price={product.price}
                addProduct={context.addProduct}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryProduct