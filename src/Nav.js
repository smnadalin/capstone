import logo from "./Images/Logo.svg";

function Nav() {
  const hyperlinks = ["Home", "About", "Menu", "Reservations", "Login"];
  return (
    <>
      <img src={logo} alt="Logo"></img>
      <ul>
        {hyperlinks.map((e) => (
          <ul>{e}</ul>
        ))}
      </ul>
    </>
  );
}

export default Nav;
