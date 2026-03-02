import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <h1 className="logo">
          TECHNOVA
        </h1>

        {/* Links */}
        <div className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/events">EVENTS</Link>
          <Link to="/contact">CONTACT</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;