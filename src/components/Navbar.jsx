import { Link } from "react-router-dom";
import "../index.css";
import licet from "../assets/Images/licet.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <img src={licet} alt="Licet Logo" />
          <span className="logo-text">LICET</span>
        </div>

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