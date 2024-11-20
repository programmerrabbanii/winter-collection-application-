import navlogo from "../assets/navlogo.jpg";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 shadow-md px-6 py-4">
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          <img className="h-20" src={navlogo} alt="Logo" />
        </Link>
      </div>

      <div className="navbar-center">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to="/donation" className="text-lg">
              Donation Campaigns
            </Link>
          </li>
          <li>
            <Link to="/help" className="text-lg">
              How to Help
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-lg">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center space-x-4">
        {/* User Image */}
        {user && user.email && (
          <img
            className="w-14 h-14 rounded-full"
            src={user.photoURL}
            alt="User"
          />
        )}

        {/* Login/Logout Button */}
        {user && user.email ? (
          <button
            onClick={logOutUser}
            className="btn rounded-none bg-black text-white"
          >
            Log Out
          </button>
        ) : (
          <Link to="/login" className="btn rounded-none bg-black text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
