import foodp from "../assets/restauranfood.jpg"
import BaseOfAction from "./BaseOfAction";

function CallToAction () {
    return (
        <section className="ctaSection">
       <div id="callToAction"><BaseOfAction className="baseOfAction" /><img id="calltoactionimg" src={foodp} alt="" />
       <button id="herobutton">Reserve A Table</button></div>
       </section>
    )
}

export default CallToAction;