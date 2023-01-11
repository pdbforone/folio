import Lime from './assets/Rectangle 4.svg';
function Main () {
return (
    <main className="content">
        <section className="main-hero">
        <hgroup id= "heroh1g">
        <h1 className="reserve">Reserve</h1>
        <h1 className="reserve">A Table</h1>
        </hgroup>

        <img id="lime" src={Lime} alt= "Lime Logo"/>
        </section>

    <section id= "forms">
        <hgroup id="formh1">
            <h1>Let's get started and see where</h1>
            <h1>we can fit you in!</h1>
        </hgroup>
    </section>
    </main>
)};

export default Main;