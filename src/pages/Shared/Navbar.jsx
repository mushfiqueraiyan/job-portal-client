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
      <div className="flex justify-between items-center py-2 px-3">
        <h1 className="font-bold text-3xl text-blue-600">Job Portal</h1>

        <div>
          <nav className="flex gap-16 items-center">
            <NavLink
              className={({ isPending, isActive }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-blue-700"
                  : ""
              }
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isPending, isActive }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-blue-700"
                  : ""
              }
              to={"/jobs"}
            >
              Jobs
            </NavLink>
            <NavLink
              className={({ isPending, isActive }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-blue-700"
                  : ""
              }
              to={"/about"}
            >
              About
            </NavLink>
            <NavLink
              className={({ isPending, isActive }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-blue-700"
                  : ""
              }
              to={"/contact"}
            >
              Contact
            </NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {loader ? (
            <Loader2 />
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <p>
                    <span className="font-bold">Name: </span>
                    {user.displayName}
                  </p>
                </li>
                <li
                  className="bg-red-600 text-white rounded mt-3"
                  onClick={handleLogout}
                >
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              {" "}
              <Link
                to={"/login"}
                className="btn text-blue-700 border-blue-700 btn-outline "
              >
                Login
              </Link>
              <Link to={"/register"} className="btn bg-blue-700 text-white">
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
