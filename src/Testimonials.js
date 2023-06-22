import TestimonialBox from "./TestimonialBox";

function Testimonials() {
  return (
    <>
      <h1 className="testimonialsHeading">Testimonials</h1>
      <div className="testimonialsMain">
        <TestimonialBox image="./Images/review1.jpg" />
        <TestimonialBox />
        <TestimonialBox />
        <TestimonialBox />
      </div>
    </>
  );
}

export default Testimonials;
