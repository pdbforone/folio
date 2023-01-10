import Logo from './assets/Logo.svg';
import Basket from './assets/basket .svg';
import Nav from './Nav.js';
function Header () {
return (
    <header className = "container">



    <img src = {Logo} alt="" />
    <Nav></Nav>
    <img id= "Cart" src={Basket} alt=""/>

    </header>
)};

export default Header;