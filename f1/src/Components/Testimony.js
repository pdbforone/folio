import React from "react";
const Testimony = ({ Rating, imageSrc, Name, Review }) => {

   
   
   
    

    return (
    
    <div className="cardLikeBox">
     
    <h2 className="rating">{Rating}</h2>
    <img id="testimonyImg" src={imageSrc} alt=""/>
    <h2 className="rating">{Name}</h2>
    <h2 className="rating">{Review}</h2>
   
    </div>
   )}
  export default Testimony;
  