import React from "react";
const Testimony = ({ Rating, imageSrc, Name, Review }) => {

   
   
   
    

    return (
    
    <section className="Testimony">
     
    <h2 className="rating">{Rating}</h2>
    <img id="testimonyimg" src={imageSrc} alt=""/>
    <h2 className="name">{Name}</h2>
    <h2 className="review">{Review}</h2>
   
    </section>
   )}
  export default Testimony;
  