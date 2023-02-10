import React from "react";
import Card from "./Card";


const foods = [
    {
      title: "Greek Salad",
      price: "$12.99",
      description:`The famous greek salad of crispy
      lettuce, peppers, olives and our 
      Chicago style feta cheese,
      garnished with crunchy garlic 
      and rosemary croutons. `,
      getImageSrc: () => require("../assets/greek salad.jpg"),
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
        getImageSrc: () => require(`../assets/bruchetta.svg`).default,
      },
      {
        title: "Lemon Dessert",
        price: "$12.99",
        description:`Lorem ipsum dolor sit amet consectetur adipiscing elit,
         sed do eiusmod tempor incididun.t lahnne eit do ore magna alliiqua`,
        getImageSrc: () => require("../assets/lemon dessert.jpg"),
      },];

const Specials = () =>  {
  return (
<section className="specials">
<h2 className="specialHeader">SPECIALS</h2>
<button className="specialButton">Online Menu</button>
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