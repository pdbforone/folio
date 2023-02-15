import { useState } from "react";

function ReservationForm (props) {
   const {availableTimes, handleRemove } = props;
   const [time, setTime] = useState(availableTimes)
   const [date, setDate] = useState("");
   const [guests, setGuests] = useState("");
   const [wheelch, setWheelch] = useState("");
   const [occasion, setOccasion] = useState("");
   const styles = {display: "grid", maxWidth: "200px", gap: "20px", color: "black"};
   const handleSubmit = (e) => {
      e.preventDefault();
      setDate("");
      setTime(availableTimes[0]);
      setGuests("1");
      setWheelch("1");
      setOccasion("Birthday");
     console.log("Form Submitted!");};

     const removeTime = (id) => {
      handleRemove(id);
     };

   return (
    <section id= "forms">
    
    <hgroup id="formh1">
        <h1>Let's get started and see where</h1>
        <h1>we can fit you in!</h1>
    </hgroup>

    <form onSubmit={handleSubmit}
    style ={styles} availableTimes={availableTimes}> 
   <label htmlFor="date">Choose date</label>
   <input type="date" 
   placeholder="Choose Date" 
   name="date" 
   value={date} 
   id="date" 
   onChange={(e)=> 
   setDate(e.target.value)}
    />
   <label htmlFor="time">Choose time</label>
   <select id="time"
   value={time.id}
   onChange={(e) =>
  setTime(
    availableTimes.find((t) => t.id === parseInt(e.target.value))
  )
}>
  {availableTimes.map((item => (
    <option key={item.id} value={item.id} removeTime={removeTime}>
      {item.time}
    </option>
   )))}
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number"
    placeholder="1" 
    min="1" 
    max="10" 
    id="guests"
    value={guests}
   onChange={(e)=>setGuests(e.target.value)}
    />
   <label htmlFor="wheelch">Number of wheelchairs</label>
   <input type="number"
    placeholder="1" 
    min="1" 
    max="10" 
    id="wheelch"
    value={wheelch}
   onChange={(e)=>setWheelch(e.target.value)}/>
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion"
   value={occasion}
   onChange={(e)=>setOccasion(e.target.value)}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit"
   value="Preview Reservation"
   onClick={() => handleRemove(time.id)}
   />
   </form>
</section>


   );
}

export default ReservationForm;