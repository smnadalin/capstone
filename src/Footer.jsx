import logo from "./Images/logoMono.png";
import { Link } from "react-router-dom";
import facebook from "./Images/facebook.png";
import twitter from "./Images/twitter.png";
import instagram from "./Images/instagram.png";
import phone from "./Images/phone.png";
import email from "./Images/email.png";
import address from "./Images/address.png";

function Footer() {
  // const doormatNavigationItems = ["Home", "Contact", "Reservations"];
  // const doormatNavigationLinks = ["/", "/contact", "/booking"];

  const doormatNavigationItems = ["Home", "Menu", "Contact", "Reservations"];
  const doormatNavigationLinks = ["/", "/menu", "/contact", "/booking"];

  const contact = [
    {
      text: "123 Main Street, Chicago, IL 60601",
      image: address,
    },
    {
      text: "(555) 123-4567",
      image: phone,
    },
    {
      text: "mario@littlelemon.com",
      image: email,
    },
  ];

  const socialMedia = [
    {
      image: facebook,
      links: "https://www.facebook.com",
      alt: "Facebook",
    },
    {
      image: twitter,
      links: "https://www.twitter.com",
      alt: "Twitter",
    },
    {
      image: instagram,
      links: "https://www.instagram.com",
      alt: "Instagram",
    },
  ];
  return (
    <footer>
      <div className="footerImageContainer">
        <img src={logo} alt="Logo" width="60%"></img>
      </div>
      <div className="footerNavigationContainer">
        <p>Links</p>
        <ul>
          {doormatNavigationItems.map((e, index) => (
            <li key={e} className="navigationListItem">
              <Link
                style={{ color: "inherit" }}
                to={doormatNavigationLinks[index]}
                role="navigation"
                aria-label={e}
              >
                {e}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footerContactContainer">
        <p>Contact</p>
        <ul>
          {contact.map((e) => (
            <li key={e.text} className="contactListItem">
              <img
                className="contactIcons"
                src={e.image}
                style={{ width: "20px", height: "20px" }}
                alt={e.text}
              ></img>
              {e.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="footerSocialMediaContainer">
        <p>Follow Us</p>
        <ul>
          {socialMedia.map((e) => (
            <li key={e.alt} className="socialMediaListItem">
              <a href={e.links}>
                <img
                  src={e.image}
                  style={{ width: "40px", height: "40px" }}
                  alt={e.alt}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
