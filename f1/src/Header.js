import Logo from './assets/Logo.svg';
import Basket from './assets/basket .svg';
import Nav from './Nav.js';
function Header () {
return (
    <header class = "container"> 



    <img id="Lem" src = {Logo} alt="" />
    <Nav></Nav>
    <img id= "Cart"role="cart" src={Basket} alt=""/>

    </header>
)};

export default Header;