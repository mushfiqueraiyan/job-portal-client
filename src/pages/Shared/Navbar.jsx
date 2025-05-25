import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
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
          <Link className="btn text-blue-700 border-blue-700 btn-outline ">
            Login
          </Link>
          <Link className="btn bg-blue-700 text-white">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
