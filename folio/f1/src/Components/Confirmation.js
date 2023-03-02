import React from "react";
import { Link } from "react-router-dom";

const ConfirmedBooking = () => {
  return (
    <div>
      <h1>Booking Confirmed!</h1>
      <p>Thank you for booking with us. Your reservation has been confirmed.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ConfirmedBooking;
