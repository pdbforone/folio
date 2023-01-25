import BaseOfAction from "./BaseOfAction";
import chefB from '../assets/restaurant chef B.jpg';
import foodums from '../assets/restauranfood.jpg';


function About () {
    

        return (
        <section className="about">
            <BaseOfAction/>
            <img id="About1"src={foodums} alt=""/>
            <img id="About2" src={chefB} alt=""/>

        </section>)

}
export default About;