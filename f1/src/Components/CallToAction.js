import Chicago from "./Chicago";
import foodp from "../assets/greek salad.jpg"

function CallToAction () {

    const data = {
        paragraph: `Little Lemon is a charming neighborhood bistro
        that serves simple food and classic cocktails in a
        lively but casual environment. The restaurant
        features a locally-sourced menu with daily specials.`
    }
    return (
        <><>
            <h1> Little Lemon </h1>
            <Chicago
            paragraph = {data.paragraph} />
            <button></button>
        </><>
                <img src={foodp} alt=""/>
            </></>
    )
}

export default CallToAction;