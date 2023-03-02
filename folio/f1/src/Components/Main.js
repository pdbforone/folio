import { useReducer} from "react";
import Homepage from "./Homepage";
import About from "./About";
import Menu from "./Menu";
import Order from "./Order";
import Login from "./Login";
import Reservations from "./Reservations";
import { Route, Routes } from "react-router-dom";


function Main () {

  const fetchData = async (date) => {
    try {
      const response = await fetch(`/api/times?date=${date}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  
   // Updated initializeTimes function
const initializeTimes = fetchData(new Date());

// Updated updateTimes function
function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      const times = fetchData(action.date);
      return times.map((time) => ({ id: time, time }));
    default:
      return state;
  }
}


  


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
               dispatchAvailableTimes={dispatchAvailableTimes}
               />} />
               <Route path="/login" element={<Login />} />


           </Routes>
   )
}
export default Main;