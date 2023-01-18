import React from "react";
import Card from "./Card"

const foods = [
    {
      title: "Greek Salad",
      description:`Lorem ipsum dolor sit amet consectetur
        adipiscing elit, sed do eiusmod tempor
        incididun .t lahnne eit do ore magna alliiqua`,
      getImageSrc: () => require("../assets/greek salad.jpg"),
    },
    {
        title: "Bruschetta",
        description:`Lorem ipsum dolor sit amet consectetur
          adipiscing elit, sed do eiusmod tempor
          incididun .t lahnne eit do ore magna alliiqua`,
        getImageSrc: () => require("../images/photo1.jpg"),
      },
      {
        title: "Lemon Dessert",
        description:`Lorem ipsum dolor sit amet consectetur
          adipiscing elit, sed do eiusmod tempor
          incididun.t lahnne eit do ore magna alliiqua`,
        getImageSrc: () => require("../images/photo1.jpg"),
      },];

const Specials = () =>  {
<>
<h2>Specials</h2>

<button>Online Menu</button> 

<div>  {foods.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url="https://github.com/rgommezz/react-native=offline"
            imageSrc={project.getImageSrc()} /> ))}

</div>
</>}
export default Specials;