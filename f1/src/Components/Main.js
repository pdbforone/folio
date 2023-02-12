import { useState } from "react";
import Homepage from "./Homepage";
import About from "./About";
import Menu from "./Menu";
import Order from "./Order";
import Login from "./Login";
import Reservations from "./Reservations";
import { Route, Routes } from "react-router-dom";

function Main () {

    
    const [availableTimes, setAvailableTimes] = useState([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
      ]);
    return (


            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/order" element={<Order />} />
                <Route path="/reservations" element={<Reservations
                availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />} />
                <Route path="/login" element={<Login />} />

            </Routes>
    )
}
export default Main;