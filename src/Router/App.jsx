import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../Styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../Views/Home";
import AboutUs from "../Views/AboutUs";
import Products from "../Views/Products";
import Cart from "../Views/Cart";
import CartProvider from "../Components/context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="AboutUs/" element={<AboutUs />} />
            <Route path="Products/" element={<Products />} />
            <Route path="/Cart/" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}
export default App;
