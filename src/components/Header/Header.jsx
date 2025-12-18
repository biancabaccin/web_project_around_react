import logo from "../../images/logo_vector.png";

export default function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Logotipo Around the U.S."
        className="logo header__logo"
      />
      <hr className="header__line" />
    </header>
  );
}
