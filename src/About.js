import chefsImage1 from "./Images/Mario and Adrian A.jpg";
import chefsImage2 from "./Images/Mario and Adrian b.jpg";

function About() {
  return (
    <section className="about">
      <div className="aboutWrittenSection">
        <h1 className="aboutTitle">Little Lemon</h1>
        <p className="aboutSubtitle">Chicago</p>
        <p className="aboutText">
          Welcome to Little Lemon, where the heart of Italy and the spirit of
          Greece converge in the vibrant city of Chicago. <br />
          <br />
          Adrian and Mario are the culinary dream team behind our Mediterranean
          haven. Mario, inspired by his Italian roots, brings the warmth of
          Nonna's kitchen to every dish, crafting meals that tell a story of
          love for good food. Adrian, with a passion for the bold flavors of
          Greece, adds a touch of the Mediterranean sun to our menu. <br />
          <br />
          At Little Lemon, we've curated a fusion of Italian and Greek flavors
          that dance on your palate. From classic pasta dishes to savory Greek
          delights, each bite is a celebration of authenticity and freshness.
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
