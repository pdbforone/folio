import Logo from '../Assets/Logo.svg';
import Basket from '../Assets/basket .svg';
import Nav from './Nav.js';
import { Link } from 'react-router-dom';
import Order from './Order';
function Header () {
return (
    <header className = "main-head">
    
            <Nav></Nav>

    <img id= "hlogo" src = {Logo} alt="" />
    
    <Link to={Order.path} id= "hcart">
    <img id = "hcarti" src={Basket} alt=""/>
    </Link>
    
    
    </header>
)};

export default Header;