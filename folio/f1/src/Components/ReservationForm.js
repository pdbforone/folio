import { useState, useEffect, useCallback } from "react";

function ReservationForm(props) {
const { availableTimes, dispatchAvailableTimes, submitForm } = props;
const [selectedTimes, setSelectedTimes] = useState([]);
const [bookedTimes, setBookedTimes] = useState([]);
const [date, setDate] = useState("");
const [guests, setGuests] = useState("");
const [wheelch, setWheelch] = useState("");
const [occasion, setOccasion] = useState("Birthday");
const [isFormValid, setIsFormValid] = useState(false);

const styles = {
display: "grid",
maxWidth: "200px",
gap: "20px",
color: "black"
};

const handleSubmit = (e) => {
e.preventDefault();
submitForm({
date,
time: selectedTimes.time,
guests,
wheelch,
occasion
});
dispatchAvailableTimes({
type: "REMOVE_ITEM",
id: selectedTimes.id
});
setBookedTimes([...bookedTimes, { date, time: selectedTimes.time }]);
setDate("");
setSelectedTimes(availableTimes[0]);
setGuests("");
setWheelch("");
setOccasion("Birthday");
console.log("Form Submitted!");
};

const handleTimeChange = (e) => {
const selectedTime = availableTimes.find(
(time) => time.id === parseInt(e.target.value)
);
setSelectedTimes(selectedTime);
};

const validateForm = useCallback(() => {
  const isValid =
    date &&
    guests &&
    wheelch &&
    parseInt(guests) >= 1 &&
    parseInt(guests) <= 10 &&
    parseInt(wheelch) >= 0 &&
    parseInt(wheelch) <= 10;
  setIsFormValid(isValid);
}, [date, guests, wheelch]);

useEffect(() => {
  validateForm();
}, [date, guests, wheelch, validateForm]);

return (
<section className="formsBox">
<hgroup id="formh1">
<h1>Let's get started and see where</h1>
<h1>we can fit you in!</h1>
</hgroup>
<section className="formsProper" >
<form
     onSubmit={handleSubmit}
     style={styles}
     availableTimes={availableTimes}
     dispatchAvailableTimes={dispatchAvailableTimes}
   >
<label htmlFor="date">Choose date</label>
<input
type="date"
placeholder="Choose Date"
name="date"
value={date}
id="date"
onChange={(e) => setDate(e.target.value)}
required
min={new Date().toISOString().slice(0, 10)}
/>
<label htmlFor="time">Choose time</label>
<select
  id="time"
  className="formButtonTime"
  value={selectedTimes.id}
  onChange={handleTimeChange}
  disabled={!availableTimes || availableTimes.length === 0}
>
  {availableTimes &&
    availableTimes.map((time) =>
      !bookedTimes.some(
        (bookedTime) =>
          bookedTime.date === date && bookedTime.time === time.time
      ) ? (
        <option key={time.id} value={time.id}>
          {time.time}
        </option>
      ) : null
    )}
</select>

<label htmlFor="guests">Number of guests</label>
<input
type="number"
 placeholder="1"
      id="guests"
      className="formButton"
      value={guests}
      onChange={(e) => setGuests(e.target.value)}
      required
      min="1"
      max="10"
      title="Please enter a number between 1 and 10."
    />
    <label htmlFor="wheelch">Number of wheelchairs</label>
    <input
      className="formButton"
      type="number"
      placeholder="1"
      id="wheelch"
      value={wheelch}
      onChange={(e) => setWheelch(e.target.value)}
      required
      min="1"
      max="10"
      title="Please enter a number between 1 and 10."
    />
    
    <label htmlFor="occasion">Occasion</label>
    <select
    className="formStyle"
    placeholder="Occasion"
      id="occasion"
      value={occasion}
      onChange={(e) => setOccasion(e.target.value)}
    > 
      
      <option value="birthday">Birthday</option>
      <option value="anniversary">Anniversary</option>
    </select>

    <input
      type="submit"
      value="Book Reservation"
      disabled={!isFormValid}
      className="formSubmitButton"
    />
  </form>
  </section>
</section>
);
}
export default ReservationForm;