import TestimonialBox from "./TestimonialBox";

function Testimonials() {
  const testimonialsData = [
    {
      imageSrc: "./Images/review1.jpg",
      text: `Little Lemon's got that perfect mix of vibes and flavors`,
      author: "Maria",
    },
    {
      imageSrc: "./Images/review2.jpg",
      text: "We are totally hooked, the bruschetta is a game-changer.",
      author: "John",
    },
    {
      imageSrc: "./Images/review3.jpg",
      text: "The best restaurant in Chicago",
      author: "Alex",
    },
    {
      imageSrc: "./Images/review4.jpg",
      text: `Reminds me of my nonna's cooking`,
      author: "Ethan",
    },
  ];

  return (
    <>
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
    </>
  );
}

export default Testimonials;
