import React from "react";
import Card from "./Card";


const foods = [
    {
      title: "Greek Salad",
      price: "$12.99",
      description:`Lorem ipsum dolor sit amet consectetur adipiscing elit,
       sed do eiusmod temporincididun .t lahnne eit do ore magna alliiqua`,
      getImageSrc: () => require("../assets/greek salad.jpg"),
    },
    {
        title: "Bruschetta",
        price: "$12.99",
        description:`Lorem ipsum dolor sit amet consecteturadipiscing elit,
         sed do eiusmod temporincididun .t lahnne eit do ore magna alliiqua`,
        getImageSrc: () => require("../assets/bruchetta.svg"),
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
<h2 className="specialHeader">Specials</h2>

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
            <button className="specialButton">Online Menu</button>
</section>
)};
export default Specials;