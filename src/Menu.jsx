import greekSaladImage from "./Images/greek salad.png";
import bruschettaImage from "./Images/bruchetta.png";
import lemonImage from "./Images/lemon dessert.png";
import seafoodLinguineImage from "./Images/seafoodLinguine.png";
import souvlakiImage from "./Images/souvlaki.png";
import steakImage from "./Images/steakSmall.png";
import tiramisuImage from "./Images/tiramisu.png";
import MenuItem from "./MenuItem";

function Menu() {
  const entrees = [
    {
      name: "Greek Salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: greekSaladImage,
    },
    {
      name: "Bruschetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: bruschettaImage,
    },
  ];

  const mains = [
    {
      name: "Steak",
      price: "$",
      description: "",
      image: steakImage,
    },
    {
      name: "Seafood Linguini",
      price: "$",
      description: "",
      image: seafoodLinguineImage,
    },
    {
      name: "Lamb Souvlaki",
      price: "$",
      description: "",
      image: souvlakiImage,
    },
  ];

  const desserts = [
    {
      naeme: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: lemonImage,
    },
    {
      naeme: "Tiramisu",
      price: "$",
      description: "",
      image: tiramisuImage,
    },
  ];

  return (
    <div className="menuContainer">
      <h1 className="menuHeader">Menu</h1>
      <h2 className="menuSubheader">Entrees</h2>
      <div className="menuSectionContainer">
        {entrees.map((e) => (
          <MenuItem
            image={e.image}
            description={e.description}
            price={e.price}
            name={e.name}
          />
        ))}
      </div>
      <h2 className="menuSubheader">Mains</h2>
      <div className="menuSectionContainer"></div>
      <h2 className="menuSubheader">Desserts</h2>
      <div className="menuSectionContainer">
        {" "}
        {desserts.map((e) => (
          <MenuItem
            image={e.image}
            description={e.description}
            price={e.price}
            name={e.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
