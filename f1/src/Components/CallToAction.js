import foodp from "../assets/greek salad.jpg"
import BaseOfAction from "./BaseOfAction";

function CallToAction () {
    return (
       <div className="callToAction"><BaseOfAction className="baseOfAction" /><img id="calltoactionimg" src={foodp} alt="" />
       <button id="herobutton">Reserve A Table</button></div>
    )
}

export default CallToAction;