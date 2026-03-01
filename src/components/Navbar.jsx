import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="h-20 w-full glass neon-border flex items-center">
      <div className="w-full flex items-center px-12">

        {/* Logo */}
        <h1 className="text-5xl text-red-500 bg-yellow-300 p-6">
          TECHNOVA
        </h1>

        {/* Links */}
        <div className="ml-auto flex gap-32 text-xl">
          <Link to="/" className="no-underline hover:text-red-400 transition">
            HOME
          </Link>
          <Link to="/events" className="no-underline hover:text-blue-400 transition">
            EVENTS
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition">
            CONTACT
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;