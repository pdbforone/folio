import { useState } from "react";




function ReservationForm (props) {
   const { availableTimes, setAvailableTimes } = props;

   const [date, setDate] = useState("");
   const [guests, setGuests] = useState("");
   const [wheelch, setWheelch] = useState("");
   const [occasion, setOccasion] = useState("");
   const styles = {display: "grid", maxWidth: "200px", gap: "20px", color: "black"};
   const handleSubmit = (e) => {
      e.preventDefault();
      setDate("");
      setAvailableTimes("17:00");
      setGuests("1");
      setWheelch("1");
      setOccasion("Birthday");
     console.log("Form Submitted!");}



   return (
    <section id= "forms">
    
    <hgroup id="formh1">
        <h1>Let's get started and see where</h1>
        <h1>we can fit you in!</h1>
    </hgroup>

    <form onSubmit={handleSubmit}
    style ={styles}>
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
   <select id="time "
   value={availableTimes}
   onChange={(e)=>setAvailableTimes(e.target.value)}>
   {props.availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
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
   
   />
   </form>
</section>

   );
}

export default ReservationForm;