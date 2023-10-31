import heroImage from "./Images/restauranfood.jpg";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Hero() {
  return (
    <main>
      <div className="heroSection">
        <div class="overlay"></div>
        <div class="heroContent">
          <h1 className="heroTitle">Little Lemon</h1>
          <p className="heroSubtitle">Chicago</p>
          <p className="heroText">
            A fusion of Italian passion and Greek spirit, where every bite is a
            journey through the Mediterranean
          </p>
          <Link to="/booking">
            <button className="heroButton">Reserve a Table</button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Hero;
