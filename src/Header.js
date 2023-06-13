import heroImage from "./Images/restauranfood.jpg";

function Header() {
  return (
    <>
      <main>
        <div className="specialsTitle">
          <h1>Little Lemon</h1>
          <p>Chicage</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Reserve a Table</button>
        </div>
        <div></div>
        <div>
          <img src={heroImage} alt="Plate of food"></img>
        </div>
      </main>
    </>
  );
}

export default Header;
