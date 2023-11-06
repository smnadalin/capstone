import greekSaladImage from "./Images/greek salad.jpg";
import bruschettaImage from "./Images/bruchetta.svg";
import lemonImage from "./Images/lemon dessert.jpg";
import { useState, useEffect } from "react";

function Specials() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 50;

      if (scrollY > scrollThreshold) {
        setIsScrolled(true);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`specialsHeader ${isScrolled ? "fade-in" : ""}`}>
        <h1>Specials</h1>
        {/* <div>
          <button>Online Menu</button>
        </div> */}
      </div>
      <div className={`specialsMain ${isScrolled ? "fade-in" : ""}`}>
        <div>
          <img src={greekSaladImage} alt="Greek Salad" />
          <p className="specialsItemHeader">Greek Salad</p>
          <p className="specialsItemPrice">$12.99</p>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
        </div>
        <div>
          <img src={bruschettaImage} alt="Bruschetta" />
          <p className="specialsItemHeader">Bruschetta</p>
          <p className="specialsItemPrice">$5.99</p>
          <p>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
        </div>
        <div>
          <img src={lemonImage} alt="Lemon Dessert" />
          <p className="specialsItemHeader">Lemon Dessert</p>
          <p className="specialsItemPrice">$5.00</p>
          <p>
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
        </div>
      </div>
    </>
  );
}

export default Specials;
