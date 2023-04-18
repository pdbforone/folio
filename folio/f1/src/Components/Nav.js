import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';
import Menu from './Menu';
import Order from './Order';
import Login from './Login';
import Hamburger from '../Assets/icon _hamburger menu.svg';
import Burger from '../Assets/icon _hamburger menu_.svg';
import Reservations from './Reservations';


function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(prev => !prev)

  }
  const closeMenu = () => {
    setNavbarOpen(false);
  }
  return (

    <nav className="main-nav">
      <button id="button" onClick={handleToggle}>
        {navbarOpen ? (
          <img src={Burger} alt="hamburger menu"/>
        ) : (
          <img src={Hamburger} alt="hamburger menu" />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <li className="nav-item">
          <NavLink to="/" activeclassname="active-link" onClick={() => closeMenu()}
            exact class="nav-link">{Homepage.text}Home</NavLink></li>

        <li className="nav-item">
        <NavLink to="about" activeclassname="active-link" onClick={() => closeMenu()} 
                    exact class= "nav-link">{About.text}About</NavLink></li>
        <li className="nav-item">
        <NavLink to="menu" activeclassname="active-link" onClick={() => closeMenu()} 
                    exact class= "nav-link">{Menu.text}Menu</NavLink></li>
        <li className="nav-item">
        <NavLink to="reservations" activeclassname="active-link" onClick={() => closeMenu()} 
                    exact class= "nav-link">{Reservations.text}Reservations</NavLink>
                    </li>
        <li className="nav-item">
        <NavLink to="order" activelcassname="active-link" onClick={() => closeMenu()} 
                    exact class= "nav-link">{Order.text}Order</NavLink>
                    </li>
        <li className="nav-item">
        <NavLink to="login" activeclassname="active-link" onClick={() => closeMenu()} 
                    exact class= "nav-link">{Login.text}Login</NavLink>
                    </li>

      </ul>

    </nav>
  )
}
export default Nav;