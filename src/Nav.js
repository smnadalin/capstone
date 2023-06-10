import logo from "./Images/Logo.svg";

function Nav() {
  const hyperlinks = ["Home", "About", "Menu", "Reservations", "Login"];
  return (
    <nav>
      <img src={logo} alt="Logo"></img>
      <ul className="navLinks">
        {hyperlinks.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
