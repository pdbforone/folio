import React from "react";
const Card = ({ title, description, imageSrc }) => {

   
   
   
    

    return (
    
    <div className="Card">
     <img id="cardimg" src={imageSrc} alt=""/>
    <h2>{title}</h2>
    <p>{description}</p>
    <a href="google.com" alt="">Order Online</a>
   
    </div>
   )}
  export default Card;
  