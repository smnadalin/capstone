function TestimonialBox({ imageSrc, text, author }) {
  return (
    <>
      <div className="testimonialsBox">
        <div className="tbImageContainer">
          <img className="tbImage" src={imageSrc} alt="Name"></img>
        </div>
        <p className="tbName">{author}</p>
        <p className="tbReview">{text}</p>
      </div>
    </>
  );
}

export default TestimonialBox;
