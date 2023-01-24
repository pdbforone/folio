import React from "react";
import { Link } from "react-router-dom";
const Card = ({ title, description, imageSrc, price }) => {

   
   
   
    

    return (
    
    <div className="card">
     <img id="cardImg" src={imageSrc} alt=""/>
    <h3 className="cardH">{title}</h3>
    <h3 className="price">{price}</h3>
    <p className="cardP">{description}</p>
    <Link className="cardLink" href="google.com" alt="">Order Online</Link>
   
    </div>
   )}
  export default Card;
  