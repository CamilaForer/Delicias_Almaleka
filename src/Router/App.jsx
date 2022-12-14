import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../Styles/App.css';
import Home from '../Views/Home';
import AboutUs from '../Views/AboutUs';
import Cart from '../Views/Cart';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="AboutUs/" element={<AboutUs/>} />
      <Route path="Products/" element={<Products/>} />
      <Route path="/Cart/" element={<Cart/>} />
    </Routes>
  </BrowserRouter>
  );
}


export default App;