import Logo from './assets/Logo.svg';
import Basket from './assets/basket .svg';
import Nav from './Nav.js';
function Header () {
return (
    <header className = "main-head">



    <img id= "hlogo" src = {Logo} alt="" />
    <Nav></Nav>
    
    <a href = "www.google.com" id= "hcart">
    <img id = "hcarti" src={Basket} alt=""/>
    </a>

    </header>
)};

export default Header;