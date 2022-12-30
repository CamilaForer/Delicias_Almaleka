import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import CategoryCard from "../Components/ProductCard/CategoryCard";
import categoriesJson from "../data-products/categories.json";

const categories = categoriesJson.categories;
export default function Products() {
  return (
    <div>
      <Header />
      <p className="page_tittle">Productos</p>
      <div className="container-fluid">
        {/*Contenedor de las tarjetas */}
        <div className="row  justify-content-center row-cols-auto ">
          {/*Creador del array con tarjetas por cada uno de los productos*/}
          {categories.map((category) => (
            <CategoryCard 
              type={category.type} 
              img={category.img} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
