import React from 'react'
import Logo from '../../img/Delicias Almaleka.png'
import './Header.scss'
import {GiHamburgerMenu,GiShoppingCart} from "react-icons/gi";
import { Link } from "react-router-dom";
import Menu from '../Menu';

export default function Header() {
  
  return (
    <header className="App-header">
        <Menu/>
        <img  className='logo' src={Logo}/>
        <Link to='/Cart'>
          <GiShoppingCart className='icons'/>
        </Link>
      </header>
  )
}
