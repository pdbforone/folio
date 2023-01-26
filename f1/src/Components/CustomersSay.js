import Testimony from "./Testimony";

const testimonials = [
    {
      Rating: "Rating",
      getImageSrc: () => require("../assets/Mario and Adrian A.jpg"),
      Name: "Name",
      Review: "Review",
    },
    {
    Rating: "Rating",
      getImageSrc: () => require("../assets/Mario and Adrian A.jpg"),
      Name: "Name",
      Review: "Review",
    },
      {
        Rating: "Rating",
      getImageSrc: () => require("../assets/Mario and Adrian A.jpg"),
      Name: "Name",
      Review: "Review",
      },];

const CustomersSay = () =>  {
  return (
<section className="customersSay">
<h2 className="customersH">Testimonials</h2>

<button className="specialButton">Online Menu</button>
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