import face from "./Images/icon _eye_.svg";

function TestimonialBox() {
  return (
    <>
      <div className="testimonialsBox">
        <p className="tbRating">Rating</p>
        <p className="tbName">Name</p>
        <img className="tbImage" src={face} alt="Name"></img>
        <p className="tbReview">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod temp...
        </p>
      </div>
    </>
  );
}

export default TestimonialBox;
