import ReservationForm from './ReservationForm';
import Lime from '../Assets/Rectangle 4.svg';


function Reservations (props) {


   return (
   <>


   <main className="content">
       <section id="hero">
           <div className="main-hero">
               <hgroup id="heroh1g">
                   <h1 className="reserve">Reserve</h1>
                   <h1 className="reserve">A Table</h1>
               </hgroup>


               <img id="lime" src={Lime} alt="Lime Logo" />
           </div>
       </section>
       <ReservationForm
       availableTimes={props.availableTimes}
       handleRemove={props.handleRemove}
       dispatchAvailableTimes={props.dispatchAvailableTimes}
       submitForm={props.submitForm}
       />
   </main>
   </>
)};


export default Reservations;
