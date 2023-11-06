import greekSaladImage from "./Images/greek salad.jpg";
import bruschettaImage from "./Images/bruchetta.svg";
import lemonImage from "./Images/lemon dessert.jpg";

function Menu() {
  return (
    <div className="menuContainer">
      <h1 className="menuHeader">Menu</h1>
      <div>
        <img className="menuImage" src={greekSaladImage} alt="Greek Salad" />
        <p className="menuItemHeader">Greek Salad</p>
        <p className="menuItemPrice">$12.99</p>
        <p>
          The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
      </div>
      <div>
        <img className="menuImage" src={bruschettaImage} alt="Bruschetta" />
        <p className="menuItemHeader">Bruschetta</p>
        <p className="menuItemPrice">$5.99</p>
        <p>
          Our Bruschetta is made from grilled bread that has been smeared with
          garlic and seasoned with salt and olive oil.
        </p>
      </div>
      <div>
        <img className="menuImage" src={lemonImage} alt="Lemon Dessert" />
        <p className="menuItemHeader">Lemon Dessert</p>
        <p className="menuItemPrice">$5.00</p>
        <p>
          This comes straight from grandma’s recipe book, every last ingredient
          has been sourced and is as authentic as can be imagined.
        </p>
      </div>
    </div>
  );
}

export default Menu;
