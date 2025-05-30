import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { Loader2 } from "lucide-react";
import { div } from "motion/react-client";

const Navbar = () => {
  const { user, loader, logout } = use(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-md">
        <div className="navbar-start">
          {/* Hamburger for small screens */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-semibold" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/jobs"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-semibold" : ""
                  }
                >
                  Jobs
                </NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink
                      to="/myApplications"
                      className={({ isActive }) =>
                        isActive ? "text-blue-600 font-semibold" : ""
                      }
                    >
                      My Applications
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/addJobs"
                      className={({ isActive }) =>
                        isActive ? "text-blue-600 font-semibold" : ""
                      }
                    >
                      Add Jobs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/myJobs"
                      className={({ isActive }) =>
                        isActive ? "text-blue-600 font-semibold" : ""
                      }
                    >
                      My Jobs
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          {/* Logo */}
          <h1 className="font-bold text-2xl text-blue-600 ml-2">Job Portal</h1>
        </div>

        {/* Center nav for large screens only */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-semibold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-semibold" : ""
                }
              >
                Jobs
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    to="/myApplications"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 font-semibold" : ""
                    }
                  >
                    My Applications
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addJobs"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 font-semibold" : ""
                    }
                  >
                    Add Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myJobs"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 font-semibold" : ""
                    }
                  >
                    My Jobs
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Right: Profile or login/register */}
        <div className="navbar-end">
          {loader ? (
            <span className="loading loading-spinner text-blue-500"></span>
          ) : user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt={user.displayName} src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 z-[1] w-52 p-2 shadow"
              >
                <li>
                  <p>
                    <span className="font-bold">Name: </span>
                    {user.displayName}
                  </p>
                </li>
                <li
                  className="bg-red-600 text-white rounded mt-2"
                  onClick={handleLogout}
                >
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/login"
                className="btn btn-outline text-blue-600 border-blue-600"
              >
                Login
              </Link>
              <Link to="/register" className="btn bg-blue-600 text-white">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
