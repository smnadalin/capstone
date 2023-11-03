import logo from "./Images/logoMono.png";
import { Link } from "react-router-dom";
import facebook from "./Images/facebook.png";
import twitter from "./Images/twitter.png";
import instagram from "./Images/instagram.png";
import phone from "./Images/phone.png";
import email from "./Images/email.png";
import address from "./Images/address.png";

function Footer() {
  const doormatNavigationItems = ["Home", "Menu", "Contact", "Reservations"];
  const doormatNavigationLinks = ["/", "/", "/", "/booking"];
  const contactItems = [
    "Address: 123 Main Street, Chicago, IL 60601",
    "Phone: (555) 123-4567",
    "Email: mario@littlelemon.com",
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
      <div>
        <img src={logo} alt="Logo" width="60%"></img>
      </div>
      <div>
        <p>Links</p>
        <ul>
          {doormatNavigationItems.map((e, index) => (
            <li key={e}>
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
      <div>
        <p>Contact</p>
        <ul>
          {contactItems.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>Social Media</p>
        <ul>
          {socialMedia.map((e) => (
            <li key={e.alt}>
              <a href={e.links} target="_blank">
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
