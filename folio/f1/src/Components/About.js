import BaseOfAction from "./BaseOfAction";
import chefB from '../Assets/restaurant chef B.jpg';
import foodums from '../Assets/restaurant.jpg';
import '../CSS/About.css';


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