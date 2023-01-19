import Chicago from "./Chicago";

function BaseOfAction () {

    const data = {
        paragraph: `Little Lemon is a charming neighborhood bistro
        that serves simple food and classic cocktails in a
        lively but casual environment. The restaurant
        features a locally-sourced menu with daily specials.`
    };
    return (
        <div id="base">
            <hgroup className="heroBasehg"><h1> Little Lemon </h1>
            <Chicago
            paragraph = {data.paragraph} />
            </hgroup>
            
        </div>
                
        
    )
}

export default BaseOfAction;