import Logo from './assets/Logo.svg';
import Basket from './assets/basket .svg';
import Nav from './Nav.js';
function Header () {
return (
    <header class = "grid"> 
   
    <img class="lem" src = {Logo} alt="" />
    
    <Nav></Nav>
    
    <img role="cart" src={Basket} alt=""/>
   
    </header>
)};

export default Header;