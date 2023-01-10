import Lime from './assets/Rectangle 4.svg';
function Main () {
return (
    <main className="content">
        <section className="main-hero">
        <hgroup>
        <h1>Reserve</h1>
        <h1>A Table</h1>
        </hgroup>

        <img id="lime" src={Lime} alt= "Lime Logo"/>
        </section>

    <section id= "forms">
        <hgroup>
            <h2>Let's get started and see where</h2>
            <h2>we can fit you in!</h2>
        </hgroup>
    </section>
    </main>
)};

export default Main;