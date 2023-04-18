import React from "react";
import { Link } from "react-router-dom";
import '../CSS/ConfirmedBooking.css';

const ConfirmedBooking = () => {
  return (
    <main className="confirmedBox">
      <h1 className="confirmedH1">Booking Confirmed!</h1>
      <h2 className="confirmedP">Thank you for booking with us. Your reservation has been confirmed.</h2>
      <div className="confirmedButtonBox"><Link to="/" >
        <button className="backButton">Back To Home</button>
      </Link>
      </div>
    </main>
  );
};

export default ConfirmedBooking;
