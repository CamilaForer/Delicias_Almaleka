import Carouseel from '../Components/Carousel/Carouseel.jsx'
import Header from '../Components/Header/Header.jsx'
import ProductCard from '../Components/ProductCard/ProductCard.jsx'
import Footer from '../Components/Footer/Footer.jsx'

export default function Home() {
  return (
    <>
      <Header/>
      <Carouseel/>
      <p className='page_tittle'>Productos destacados</p>
      <ProductCard/>
      <Footer/>
    </>
  )
}
