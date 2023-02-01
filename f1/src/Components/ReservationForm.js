import { useState } from "react";




function ReservationForm () {
    
   const [date, SetDate] = useState("");
   const [time, SetTime] = useState("");
   const [guests, SetGuests] = useState("");
   const [wheelch, SetWheelch] = useState("");
   const [occasion, SetOccasion] = useState("");
   const styles = {display: "grid", maxwidth: "200px", gap: "20px", color: "black"}

   const handleSubmit = (e) => {
      e.preventDefault();
      SetDate("");
      SetTime("");
      SetGuests("");
      SetWheelch("");
      SetOccasion("");
     console.log("Form Submitted!");}

   return (
    <section id= "forms">
    
    <hgroup id="formh1">
        <h1>Let's get started and see where</h1>
        <h1>we can fit you in!</h1>
    </hgroup>

    <form style ={styles}>
   <label htmlFor="date">Choose date</label>
   <input type="date" 
   placeholder="Choose Date" 
   name="date" 
   value={date} 
   id="date" 
   onChange={(e)=>SetDate(e.target.value)}/>
   <label htmlFor="time">Choose time</label>
   <select id="time "
   value={time}
   onChange={(e)=>SetTime(e.target.value)}>
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number"
    placeholder="1" 
    min="1" 
    max="10" 
    id="guests"
    value={guests}
   onChange={(e)=>SetGuests(e.target.value)}
    />
   <label htmlFor="wheelch">Number of wheelchairs</label>
   <input type="number"
    placeholder="1" 
    min="1" 
    max="10" 
    id="wheelch"
    value={wheelch}
   onChange={(e)=>SetWheelch(e.target.value)}
    />
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion"
   value={occasion}
   onChange={(e)=>SetOccasion(e.target.value)}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit"
   value="Preview Reservation"
   onSubmit={handleSubmit}
   />
   </form>
</section>

   );
}


export default ReservationForm;