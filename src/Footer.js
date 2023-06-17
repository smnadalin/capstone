import logo from "./Images/logo_vertical.png";

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
    <footer>
      <div>
        <img src={logo} alt="Logo" width="60%"></img>
      </div>
      <div>
        <p>Doormat Navigation</p>
        <ul>
          {doormatNavigationItems.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>Contact</p>
        <ul>
          {contactItems.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>Social Media Links</p>
        <ul>
          {socialMediaLinks.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
