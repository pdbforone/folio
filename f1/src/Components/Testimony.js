import React from "react";
const Testimony = ({ Rating, imageSrc, Name, Review }) => {

   
   
   
    

    return (
    
    <div className="Testimony">
     
    <h2>{Rating}</h2>
    <img id="testimonyimg" src={imageSrc} alt=""/>
    <h2>{Name}</h2>
    <h2>{Review}</h2>
   
    </div>
   )}
  export default Testimony;
  