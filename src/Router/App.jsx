import { HashRouter, Routes, Route } from "react-router-dom";
import "../Styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../Views/Home";
import AboutUs from "../Views/AboutUs";
import Products from "../Views/Products";
import Cart from "../Views/Cart";
import CartProvider from "../Components/context/CartContext";
import Contact from "../Views/Contact";
import CategoryProduct from "../Views/CategoryProduct";

function App() {
  return (
    <>
      <CartProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="aboutUs/" element={<AboutUs />} />
            <Route path="products/" element={<Products />} />
            <Route path="contact/" element={<Contact />} />
            <Route path="cart/" element={<Cart />} />
            <Route path="category/:category" element={<CategoryProduct/>}/>
          </Routes>
        </HashRouter>
      </CartProvider>
    </>
  );
}
export default App;
