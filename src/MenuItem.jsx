function MenuItem({ image, name, description, price }) {
  return (
    <div className="menuItemContainer">
      <img className="menuImage" src={image} alt={name} />
      <p className="menuItemHeader">{name}</p>
      <p className="menuItemPrice">{price}</p>
      <p className="menuItemDescription">{description}</p>
    </div>
  );
}

export default MenuItem;
