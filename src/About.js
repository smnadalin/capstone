import chefsImage1 from "./Images/Mario and Adrian A.jpg";
import chefsImage2 from "./Images/Mario and Adrian b.jpg";

function About() {
  return (
    <section className="about">
      <div>
        <h1 className="aboutTitle">Little Lemon</h1>
        <p className="aboutSubtitle">Chicago</p>
        <p className="aboutText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <img
        className="aboutImageTop"
        src={chefsImage1}
        alt="Mario and Adrian 1"
      ></img>
      <img
        className="aboutImageBottom"
        src={chefsImage2}
        alt="Mario and Adrian 2"
      ></img>
    </section>
  );
}

export default About;
