import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h3>Artify</h3>
      <nav className="menu">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/login">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
