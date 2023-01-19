import React from "react";
const Card = ({ title, description, imageSrc }) => {

   
   
   
    

    return (
    
    <div className="card">
     <img id="cardImg" src={imageSrc} alt=""/>
    <h2 className="cardH">{title}</h2>
    <p className="cardP">{description}</p>
    <a className="cardLink" href="google.com" alt="">Order Online</a>
   
    </div>
   )}
  export default Card;
  