import React from 'react'
import '../Styles/App.scss'
import Logo from '../img/Delicias Almaleka.png'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

export default function AboutUs() {
  return (
    <>
      <Header />
      <div className='about'>
      <p className='page_tittle'>Acerca de nosotros</p>
      <p>Somos una empresa dedicada a la producción y comercialización de productos de pastelería y repostería de excelente calidad. Nos comprometemos a utilizar siempre, en nuestros productos ingredientes frescos y de primera calidad, además, dedicamos el tiempo necesario para satisfacer las necesidades y gustos de cada cliente.</p>
      <div className='logoAbout'>
      <img src={Logo} alt="logo" />
      </div>
      </div>
      <Footer/>
    </>
  )
}
