import heroImage from "./Images/restauranfood.jpg";

function Header() {
  return (
    <>
      <main>
        <div>
          <h1 className="headerTitle">Little Lemon</h1>
          <p className="headerSubtitle">Chicago</p>
          <p className="headerText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Reserve a Table</button>
        </div>
        <div>
          <img src={heroImage} alt="Plate of food"></img>
        </div>
      </main>
    </>
  );
}

export default Header;
