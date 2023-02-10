import BaseOfAction from "./BaseOfAction";
import chefB from '../assets/restaurant chef B.jpg';
import foodums from '../assets/restaurant.jpg';


function About () {
    

        return (
        <section className="about1">
        <div className="aboutBox">
            <BaseOfAction/>
            

        </div>

        <img id="About1"src={foodums} alt=""/>
            <img id="About2" src={chefB} alt=""/>
        </section>)

}
export default About;