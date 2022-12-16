import React from 'react'
import Logo from '../img/Delicias Almaleka.png'
import '../Styles/Header.css'
import {GiHamburgerMenu} from "react-icons/gi";

export default function Header() {
  return (
    <header className="App-header">
        <GiHamburgerMenu className='menu'/>
        <img  className='logo' src={Logo}/>
      </header>
  )
}
