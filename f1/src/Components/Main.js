import Homepage from "./Homepage";
import About from "./About";
import Menu from "./Menu";
import Order from "./Order";
import Login from "./Login";
import Reservations from "./Reservations";
import { Route, Routes } from "react-router-dom";
function Main () {
    return (


            <Routes>
            <Route path="/" element={<Homepage />} />
                <Route path="/About" element={<About />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/Order" element={<Order />} />
                <Route path="/Reservations" element={<Reservations />} />
                <Route path="/Login" element={<Login />} />

            </Routes>
    )
}
export default Main;