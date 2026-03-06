import { Link } from "react-router-dom";
import "../index.css";
import licet from "../assets/Images/licet.jpg";
import logo1 from "../assets/Images/eventlogo.jpg";
import logo2 from "../assets/Images/partnerlogo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LEFT LOGO */}
        <div className="logo">
          <img src={licet} alt="Licet Logo"  />
          <span className="logo-text">LICET</span>
        </div>

        {/* CENTER LINKS */}
        <div className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/events">EVENTS</Link>
          <Link to="/contact">CONTACT</Link>
        </div>

        {/* RIGHT LOGOS */}
        <div className="right-logos">
          <img src={logo1} alt="Event Logo" style={{ height: "45px", width: "45px" }} />
          <img src={logo2} alt="Partner Logo" style={{ height: "100px", width: "auto"}} />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;