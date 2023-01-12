import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Homepage from './Home';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import About from './About';
import Menu from './Menu';
import App from './App';
import Order from './Order';
import Login from './Login';
import Hamburger from './assets/🦆 icon _hamburger menu.svg';
import Burger from './assets/🦆 icon _hamburger menu_.svg';


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
      <button onClick={handleToggle}>
        {navbarOpen ? (
          <img src={Burger} />
        ) : (
          <img src={Hamburger} />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <li className="nav-item">
          <NavLink to={Homepage.path} activeClassName="active-link" onClick={() => closeMenu()}
            exact class="nav-link">{Homepage.text}Home</NavLink></li>

        <li className="nav-item">
        <NavLink to={About.path} activeClassName="active-link" onClick={() => closeMenu()} 
                    exact class= "nav-link">{About.text}About</NavLink></li>
        <li className="nav-item">
        <NavLink to={Menu.path} activeClassName="active-link" onClick={() => closeMenu()} 
                    exact class= "nav-link">{Menu.text}Menu</NavLink></li>
        <li className="nav-item"><NavLink to={App.path} activeClassName="active-link" onClick={() => closeMenu()} 
                    exact class= "nav-link">{App.text}Reservations</NavLink></li>
        <li className="nav-item"><NavLink to={Order.path} activeClassName="active-link" onClick={() => closeMenu()} 
                    exact class= "nav-link">{Order.text}Order</NavLink></li>
        <li className="nav-item"><NavLink to={Login.path} activeClassName="active-link" onClick={() => closeMenu()} 
                    exact class= "nav-link">{Login.text}Login</NavLink></li>

      </ul>

    </nav>
  )
}
export default Nav;