import foodp from "../assets/greek salad.jpg"
import BaseOfAction from "./BaseOfAction";

function CallToAction () {
    return (
       <><BaseOfAction /><img id="calltoactionimg" src={foodp} alt="" />
       <button id="herobutton">Reserve A Table</button></>
    )
}

export default CallToAction;