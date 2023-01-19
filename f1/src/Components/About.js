import BaseOfAction from "./BaseOfAction";
import chefB from '../assets/restaurant chef B.jpg';
import foodums from '../assets/restauranfood.jpg';


function About () {
    

        return (
        <>
            <BaseOfAction/>
            <img id="About1"src={foodums} alt=""/>
            <img id="About2" src={chefB} alt=""/>

        </>)

}
export default About;