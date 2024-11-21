import navlogo from "../assets/navlogo.jpg";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-md px-6 py-4 sticky top-0 z-10">
      <div className="navbar-start">
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          <img className="h-20" src={navlogo} alt="Logo" />
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-2 border-orange-300 py-2 px-5" : "text-lg"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive }) =>
                isActive ? "border-2 border-orange-300 py-2 px-5" : "text-lg"
              }
            >
              Donation Campaigns
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                isActive ? "border-2 border-orange-300 py-2 px-5" : "text-lg"
              }
            >
              How to Help
            </NavLink>
          </li>
          {user && user.email && (
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "border-2 border-orange-300 py-2 px-5" : "text-lg"
                }
              >
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end flex items-center space-x-4">
        {user && user.email && (
          <img
            className="w-14 h-14 rounded-full"
            src={user.photoURL}
            alt="User"
          />
        )}

        {user && user.email ? (
          <button
            onClick={logOutUser}
            className="py-2 px-5 rounded-sm bg-orange-300 text-white"
          >
            Log Out
          </button>
        ) : (
          <Link to="/login" className="py-2 px-6 rounded-none bg-orange-300 text-white">
            Login
          </Link>
        )}

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-base-100 shadow-lg lg:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "border-2 border-orange-300 py-2 px-5" : "text-lg"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donation"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "border-2 border-orange-300 py-2 px-5" : "text-lg"
                }
              >
                Donation Campaigns
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/help"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "border-2 border-orange-300 py-2 px-5" : "text-lg"
                }
              >
                How to Help
              </NavLink>
            </li>
            {user && user.email && (
              <li>
                <NavLink
                  to="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "border-2 border-orange-300 py-2 px-5" : "text-lg"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
