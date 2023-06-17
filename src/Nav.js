import logo from "./Images/Logo.svg";
import { Link } from "react-router-dom";

function Nav() {
  const hyperlinkNames = ["Home", "About", "Menu", "Reservations", "Login"];
  const hyperlinkPage = ["/", "/", "/", "/booking", "/"];
  return (
    <nav>
      <img src={logo} alt="Logo"></img>
      <ul className="navLinks">
        {hyperlinkNames.map((e, index) => (
          <li key={e}>
            <Link
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
    </nav>
  );
}

export default Nav;
