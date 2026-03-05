import { Link } from "react-router-dom";
import "../index.css";
import licet from "../assets/Images/licet.jpg";
import logo1 from "../assets/Images/eventlogo.png";   // event logo
import logo2 from "../assets/Images/partnerlogo.png";   // partner logo

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* CENTER SECTION */}
        <div className="nav-center">

          <div className="logo">
            <img src={licet} alt="Licet Logo" />
            <span className="logo-text">LICET</span>
          </div>

          <div className="nav-links">
            <Link to="/">HOME</Link>
            <Link to="/events">EVENTS</Link>
            <Link to="/contact">CONTACT</Link>
          </div>

        </div>

        {/* RIGHT LOGOS */}
        <div className="right-logos">
          <img src={logo1} alt="Event Logo" />
          <img src={logo2} alt="Partner Logo" />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;