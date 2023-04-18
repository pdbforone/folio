import { Link } from "react-router-dom";
import Testimony from "./Testimony";

const testimonials = [
    {
      Rating: "Rating",
      getImageSrc: () => require("../Assets/Mario and Adrian A.jpg"),
      Name: "Name",
      Review: "Review",
    },
    {
    Rating: "Rating",
      getImageSrc: () => require("../Assets/Mario and Adrian A.jpg"),
      Name: "Name",
      Review: "Review",
    },
      {
        Rating: "Rating",
      getImageSrc: () => require("../Assets/Mario and Adrian A.jpg"),
      Name: "Name",
      Review: "Review",
      },];

const CustomersSay = () =>  {
  return (
<section className="customersSay">
  <h2 className="customersH">Testimonials</h2>
  <div id="buttonBox">
    <Link to="/menu"><button className="testimonyButton">Online Menu</button></Link>
  </div>

  {testimonials.map((testimonials) => (
          <Testimony
            key={testimonials.Rating}
            Rating={testimonials.Rating}
            imageSrc={testimonials.getImageSrc()}
            Name={testimonials.Name}
            Review={testimonials.Review}
            url="https://github.com/rgommezz/react-native=offline"
             /> ))}

</section>
)};
export default CustomersSay;