import React from "react";
import Card from "./Card";


const foods = [
    {
      title: "Greek Salad",
      description:`Lorem ipsum dolor sit amet consectetur adipiscing elit,
       sed do eiusmod temporincididun .t lahnne eit do ore magna alliiqua`,
      getImageSrc: () => require("../assets/greek salad.jpg"),
    },
    {
        title: "Bruschetta",
        description:`Lorem ipsum dolor sit amet consecteturadipiscing elit,
         sed do eiusmod temporincididun .t lahnne eit do ore magna alliiqua`,
        getImageSrc: () => require("../assets/bruchetta.svg"),
      },
      {
        title: "Lemon Dessert",
        description:`Lorem ipsum dolor sit amet consectetur adipiscing elit,
         sed do eiusmod tempor incididun.t lahnne eit do ore magna alliiqua`,
        getImageSrc: () => require("../assets/lemon dessert.jpg"),
      },];

const Specials = () =>  {
  return (
<>
<h2>Specials</h2>

<button>Online Menu</button>
  {foods.map((foods) => (
          <Card
            key={foods.title}
            title={foods.title}
            description={foods.description}
            url="https://github.com/rgommezz/react-native=offline"
            imageSrc={foods.getImageSrc()} /> ))}

</>
)};
export default Specials;