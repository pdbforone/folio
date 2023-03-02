import { useReducer } from "react";
import Homepage from "./Homepage";
import About from "./About";
import Menu from "./Menu";
import Order from "./Order";
import Login from "./Login";
import Reservations from "./Reservations";
import Confirmation from "./Confirmation";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";

function Main() {
  function updateTimes(state, action) {
    switch (action.type) {
      case "REMOVE_ITEM":
        return state.filter((item) => item.id !== action.id);
      default:
        return state;
    }
  }

  const initializeTimes = [
    { id: 1, time: "17:00" },
    { id: 2, time: "18:00" },
    { id: 3, time: "19:00" },
    { id: 4, time: "20:00" },
    { id: 5, time: "21:00" },
    { id: 6, time: "22:00" },
  ];

  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes
  );

  function handleRemove(id) {
    dispatchAvailableTimes({ type: "REMOVE_ITEM", id });
  }

  const navigate = useNavigate();

  async function submitForm(formData) {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
      );
      const data = response.data;
      console.log(data);
      navigate("/confirmation");
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route
        path="/reservations"
        element={
          <Reservations
            availableTimes={availableTimes}
            handleRemove={handleRemove}
            dispatchAvailableTimes={dispatchAvailableTimes}
            submitForm={submitForm}
          />
        }
      />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}

export default Main;
