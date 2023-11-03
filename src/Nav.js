import logo from "./Images/Logo.svg";
import { Link } from "react-router-dom";

function Nav() {
  const hyperlinkNames = ["Home", "Menu", "Contact", "Reservations"];
  const hyperlinkPage = ["/", "/", "/", "/booking"];
  return (
    <nav>
      <div className="navContent">
        <img src={logo} alt="Logo"></img>
        <ul className="navLinks">
          {hyperlinkNames.map((e, index) => (
            <li key={e}>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to={hyperlinkPage[index]}
                style={{ color: "inherit", textDecoration: "inherit" }}
                role="Navigation"
                aria-label={e}
              >
                {e}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
