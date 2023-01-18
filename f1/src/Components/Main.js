import Homepage from "./Homepage";
import About from "./About";
import Menu from "./Menu";
import Order from "./Order";
import Login from "./Login";
import Reservations from "./Bookingpage";
import CallToAction from "./CallToAction";
import Chicago from "./Chicago";
import Specials from "./Specials";
import { Route, Routes } from "react-router-dom";
import CustomersSay from "./CustomersSay";
import Header from "./Header";
import Footer from "./Footer";
function Main () {
    return (
        <><><><Header />
        <Homepage/></>

            <Routes>
                <Route path="/home" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/order" element={<Order />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Reservations" element={<Reservations />} />
                <Route path="/Specials" element={<Specials />} />
                <Route path="/Chicago" element={<Chicago />} />
                <Route path="/CustomerSay" element={<CustomersSay />} />
                <Route path="/CallToAction" element={<CallToAction />} />

            </Routes></><></><><Footer/></></>
    )
}
export default Main;