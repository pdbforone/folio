import React, { useState}  from 'react';
import { NavLink } from "react-router-dom";


function Nav () {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
        
      }
    return (

        <nav className="main-nav">
            <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <li className="nav-item"><NavLink to={link.path} activeClassName="active-link" onClick={() => closeMenu()} 
                    exact>{link.text}Home</NavLink></li>
                    <li className="nav-item"><a href="About" class="nav-link">About</a></li>
                    <li className="nav-item"><a href="Menu" class="nav-link">Menu</a></li>
                    <li className="nav-item"><a href="Reservations" class="nav-link">Reservations</a></li>
                    <li className="nav-item"><a href="Order Online" class="nav-link">Order</a></li>
                    <li className="nav-item"><a href="Login" class="nav-link">Login</a></li>

                </ul>

            </nav>
    )
}
export default Nav;