import Chicago from "./Chicago";

function BaseOfAction () {

    const data = {
        paragraph: `We are a family owned
        Mediterranean restaurant,
        focused on traditional
        recipes served with a modern twist.`
    };
    return (
        <div id="base">
            <hgroup className="heroBaseHg"><h1 id="heroh1"> Little Lemon </h1>
            <Chicago className="chicago"
            paragraph = {data.paragraph} />
            </hgroup>
            
        </div>
                
        
    )
}

export default BaseOfAction;