import { isClickableInput } from "@testing-library/user-event/dist/utils";
import TestimonialBox from "./TestimonialBox";
import { useState, useEffect } from "react";
import review1 from "./Images/review1.png";
import review2 from "./Images/review2.png";
import review3 from "./Images/review3.png";
import review4 from "./Images/review4.png";

function Testimonials() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 500;

      if (scrollY > scrollThreshold) {
        setIsScrolled(true);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const testimonialsData = [
    {
      imageSrc: review1,
      text: `"Little Lemon's got that perfect mix of vibes and flavors"`,
      author: "Maria",
    },
    {
      imageSrc: review2,
      text: `"We are totally hooked, the bruschetta is a game-changer"`,
      author: "John",
    },
    {
      imageSrc: review3,
      text: `"The best restaurant in Chicago"`,
      author: "Alex",
    },
    {
      imageSrc: review4,
      text: `"Reminds me of my nonna's cooking"`,
      author: "Ethan",
    },
  ];

  return (
    <div className={`testimonialsContainer ${isScrolled ? "fade-in" : ""}`}>
      <h1 className="testimonialsHeading">Testimonials</h1>
      <div className="testimonialsMain">
        {testimonialsData.map((testimonial, index) => {
          return (
            <TestimonialBox
              key={index}
              imageSrc={testimonial.imageSrc}
              text={testimonial.text}
              author={testimonial.author}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
