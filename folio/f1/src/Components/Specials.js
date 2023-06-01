import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";


const foods = [
    {
      title: "Greek Salad",
      price: "$12.99",
      description:`The famous greek salad of crispy
      lettuce, peppers, olives and our 
      Chicago style feta cheese,
      garnished with crunchy garlic 
      and rosemary croutons. `,
      getImageSrc: () => require("../Assets/greek salad.jpg"),
    },
    {
        title: "Bruschetta",
        price: "$12.99",
        description:`Our Bruschetta is made from grilled
        bread that has been smeared with garlic and 
        seasoned with salt and olive oil.
        Toppings of tomato, veggies, beans, cured pork,
        or cheese are examples of variations.
        In Italy, a brustolina grill is frequently used
         to create bruschetta.`,
        getImageSrc: () => require(`../Assets/better bruschetta small.png`)
      },
      {
        title: "Lemon Dessert",
        price: "$12.99",
        description:`Experience the irresistible taste of our layered lemon cake. 
        Moist lemon-infused cake, creamy lemon buttercream, and a 
        touch of elegance with lemon slices on top. Perfect for any 
        occasion or tea time. Indulge in Mediterranean citrus bliss.`,
        getImageSrc: () => require("../Assets/lemon dessert.jpg"),
      },];

const Specials = () =>  {
  return (
<section className="specials">
<h2 className="specialHeader">SPECIALS</h2>
<Link className="specialLink"to="/menu"><button className="specialButton">Online Menu</button></Link>
<>

  {foods.map((foods) => (
          <Card
            key={foods.title}
            title={foods.title}
            price={foods.price}
            description={foods.description}
            url="https://github.com/rgommezz/react-native=offline"
            imageSrc={foods.getImageSrc()} /> ))}
            </>
           
</section>
)};
export default Specials;