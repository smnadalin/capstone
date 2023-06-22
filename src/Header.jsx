import heroImage from "./Images/restauranfood.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <main>
        <div className="headerWrittenSection">
          <h1 className="headerTitle">Little Lemon</h1>
          <p className="headerSubtitle">Chicago</p>
          <p className="headerText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/booking">
            <button className="headerButton">Reserve a Table</button>
          </Link>
        </div>
        <div>
          <img src={heroImage} alt="Plate of food"></img>
        </div>
      </main>
    </>
  );
}

export default Header;
