const Card = ({ title, description, imageSrc }) => {

   
   
   
    

    return (
    
    <div className="Card">
     <img src={imageSrc} alt=""/>
    <h2>{title}</h2>
    <p>{description}</p>
   
    </div>
   )}
  export default Card;
  