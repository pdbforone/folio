import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Card.css';

const Card = ({ title, description, imageSrc, price }) => {

   
   
   
    

    return (
    
    <div className="card">
     <h3 className="cardH">{title}</h3>
     <img id="cardImg" src={imageSrc} alt=""/>
    <p className="cardP">{description}</p>
    <h3 className="price">{price}</h3>
    <Link className="cardLink" to="/order" alt="">Order Online</Link>
   
    </div>
   )}
  export default Card;
  