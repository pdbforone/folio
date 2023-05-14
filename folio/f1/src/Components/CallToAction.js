import foodp from "../Assets/restauranfood.jpg"
import BaseOfAction from "./BaseOfAction";
import { Link } from "react-router-dom";

function CallToAction () {
    return (
        <section className="ctaSection">
            <div id="callToAction">
                 <BaseOfAction className="baseOfAction" />
                    <img id="calltoactionimg" src={foodp} alt="" />
                        <Link className="heroButtonBox" to="/reservations">
                            <button className="heroButton">Reserve A Table</button></Link></div>
       </section>
    )
}

export default CallToAction;