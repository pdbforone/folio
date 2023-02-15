import { useReducer } from "react";
import Homepage from "./Homepage";
import About from "./About";
import Menu from "./Menu";
import Order from "./Order";
import Login from "./Login";
import Reservations from "./Reservations";
import { Route, Routes } from "react-router-dom";

function Main () {

    function updateTimes (state, action) {
      switch (action.type) {
        case 'REMOVE_ITEM':
        return state.filter((item) => item.id !== action.id);
        default:
          throw new Error();
        }
        };

    const initializeTimes =  [
      { id: 1, time: '17:00' },
      { id: 2, time: '18:00' },
      { id: 3, time: '19:00' },
      { id: 4, time: '20:00' },
      { id: 5, time: '21:00' },
      { id: 6, time: '22:00' }
    ];

    

      const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initializeTimes);
    
      function handleRemove(id) {
             dispatchAvailableTimes({ type: 'REMOVE_ITEM', id });
         }
      return (


            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/order" element={<Order />} />
                <Route path="/reservations" element={<Reservations
                availableTimes={availableTimes} handleRemove={handleRemove}
                />} />
                <Route path="/login" element={<Login />} />

            </Routes>
    )
}
export default Main;