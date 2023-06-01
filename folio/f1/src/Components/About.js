import BaseOfAction from "./BaseOfAction";
import chefB from '../Assets/chef but smaller.png';
import foodums from '../Assets/Restaurant olive small.jpg';
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