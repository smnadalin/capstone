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
      price: "$24.99",
      description:
        "Premium cut steak grilled to perfection, served with your choice of side dishes.",
      image: steakImage,
    },
    {
      name: "Seafood Linguini",
      price: "$18.99",
      description:
        "Delicious linguini pasta served with a variety of fresh seafood in a savory sauce.",
      image: seafoodLinguineImage,
    },
    {
      name: "Lamb Souvlaki",
      price: "$14.99",
      description:
        "Tender lamb skewers marinated in Mediterranean herbs and spices, grilled to perfection.",
      image: souvlakiImage,
    },
  ];

  const desserts = [
    {
      name: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: lemonImage,
    },
    {
      name: "Tiramisu",
      price: "$8.99",
      description:
        "Classic Italian tiramisu with layers of coffee-soaked ladyfingers and mascarpone cream.",
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
            key={e.name}
          />
        ))}
      </div>
      <h2 className="menuSubheader">Mains</h2>
      <div className="menuSectionContainer">
        {mains.map((e) => (
          <MenuItem
            image={e.image}
            description={e.description}
            price={e.price}
            name={e.name}
            key={e.name}
          />
        ))}
      </div>
      <h2 className="menuSubheader">Desserts</h2>
      <div className="menuSectionContainer">
        {desserts.map((e) => (
          <MenuItem
            image={e.image}
            description={e.description}
            price={e.price}
            name={e.name}
            key={e.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
