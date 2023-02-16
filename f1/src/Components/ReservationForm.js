import { useState } from "react";

function ReservationForm (props) {
const { availableTimes, dispatchAvailableTimes } = props;
const [selectedTimes, setSelectedTimes] = useState(availableTimes);
const [bookedTimes, setBookedTimes] = useState([]);
const [date, setDate] = useState("");
const [guests, setGuests] = useState("");
const [wheelch, setWheelch] = useState("");
const [occasion, setOccasion] = useState("");

const styles = { display: "grid", maxWidth: "200px", gap: "20px", color: "black" };

const handleSubmit = (e) => {
e.preventDefault();
togglePreview();
  dispatchAvailableTimes({
    type: "REMOVE_ITEM",
    id: selectedTimes.id,
  });
setDate("");
setSelectedTimes(availableTimes);
setGuests("1");
setWheelch("1");
setOccasion("Birthday");
setBookedTimes([...bookedTimes, { date, time: selectedTimes.time }]);
dispatchAvailableTimes({
type: "REMOVE_ITEM",
id: selectedTimes.id,
});
console.log("Form Submitted!");
};

const handleTimeChange = (e) => {
const selectedTime = availableTimes.find((time) => time.id === parseInt(e.target.value));
setSelectedTimes(selectedTime);
};

const [isPreviewOpen, setIsPreviewOpen] = useState(false);
const togglePreview = () => {
   setIsPreviewOpen(!isPreviewOpen);
 }
 const PreviewModal = () => {
   return (
     <div className="modal">
       <div className="modal-content">
         <h2>Reservation Preview</h2>
         <p>Date: {date}</p>
         <p>Time: {selectedTimes.time}</p>
         <p>Guests: {guests}</p>
         <p>Wheelchairs: {wheelch}</p>
         <p>Occasion: {occasion}</p>
         <button onClick={togglePreview}>Edit</button>
       </div>
     </div>
   );
 }
 
return (
<section id="forms">
<hgroup id="formh1">
<h1>Let's get started and see where</h1>
<h1>we can fit you in!</h1>
</hgroup>
<form onSubmit={handleSubmit} style={styles} availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes}>
<label htmlFor="date">Choose date</label>
<input
type="date"
placeholder="Choose Date"
name="date"
value={date}
id="date"
onChange={(e) => setDate(e.target.value)}
/>
<label htmlFor="time">Choose time</label>
<select id="time" value={selectedTimes.id} onChange={handleTimeChange}>
{availableTimes.map((time) =>
!bookedTimes.some((bookedTime) => bookedTime.date === date && bookedTime.time === time.time) ? (
<option key={time.id} value={time.id}>
{time.time}
</option>
) : null
)}
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
{isPreviewOpen && <PreviewModal />}
   </form>
</section>


   );
}

export default ReservationForm;