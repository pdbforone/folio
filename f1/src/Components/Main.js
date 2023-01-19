import Homepage from "./Homepage";
import About from "./About";
import Menu from "./Menu";
import Order from "./Order";
import Login from "./Login";
import Reservations from "./Bookingpage";
import { Route, Routes } from "react-router-dom";
function Main () {
    return (
       

            <Routes>
            <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/order" element={<Order />} />
                <Route path="/Reservations" element={<Reservations />} />
                <Route path="/login" element={<Login />} />

            </Routes>
    )
}
export default Main;