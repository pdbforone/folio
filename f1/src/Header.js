import Logo from './assets/Logo.svg';
import Basket from './assets/basket .svg';
function Header () {
return (
    <header> 
    <img src = {Logo} alt="" />
    <nav>
       
        <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservations</a></li>
            <li><a>Order Online</a></li>
            <li><a>Login</a></li>
        </ul>
        
    </nav>
    <img role="cart" src={Basket} alt=""/>
    </header>
)};

export default Header;