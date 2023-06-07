function Footer() {
  const doormatNavigationItems = [
    "Home",
    "About",
    "Menu",
    "Reservations",
    "Order Online",
    "Login",
  ];
  const contactItems = ["Address", "Phone Number", "Email"];
  const socialMediaLinks = ["Address", "Phone Number", "Email"];
  return (
    <>
      <div>
        <h1>Doormat Navigation</h1>
        <ul>
          {doormatNavigationItems.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Contact</h1>
        <ul>
          {contactItems.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Social Media Links</h1>
        <ul>
          {socialMediaLinks.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Footer;
