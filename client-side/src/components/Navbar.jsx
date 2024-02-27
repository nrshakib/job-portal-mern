import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import logo from "../assets/images/job-search-logo.png";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // toggle handler for small device menu icon
  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="flex justify-between py-4">
        <Link to="/">
          <div className="flex items-center gap-2 p-1 hover:border hover:border-blue-400 hover:rounded hover:bg-yellow-300">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <div className="font-semibold text-2xl">Job Portal</div>
          </div>
        </Link>
        <div className="hidden md:flex gap-1 items-center">
          <Link
            to="/login"
            className="py-2 px-5 bg-white text-black font-semibold rounded border-2 border-black"
          >
            <button>Log In</button>
          </Link>
          <Link
            to="/signup"
            className="py-2 px-5 bg-blue-600 text-white font-semibold rounded border-2 border-blue-600"
          >
            <button>Sign Up</button>
          </Link>
        </div>
      </div>

      {/* navbar items for large screens */}
      <div className="hidden md:flex items-center justify-center gap-4 font-semibold text-gray-600 text-lg">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-blue-600" : "")}
        >
          Search A Job
        </NavLink>
        <NavLink
          to={"/post-job"}
          className={({ isActive }) => (isActive ? "text-blue-600" : "")}
        >
          Post A Job
        </NavLink>
        <NavLink
          to={"/my-jobs"}
          className={({ isActive }) => (isActive ? "text-blue-600" : "")}
        >
          My Jobs
        </NavLink>
      </div>

      {/* navbar items for small screens */}
      <div className="md:hidden block float-right mt-[-50px]">
        <button onClick={handleToggleMenu}>
          {openMenu ? (
            <FaWindowClose className="w-5 h-5" />
          ) : (
            <GiHamburgerMenu className="w-5 h-5" />
          )}
        </button>
      </div>
      <div
        className={`md:hidden grid w-44 h-36 p-2 float-right bg-gray-800 rounded text-center text-white mt-[-16px] ${
          openMenu ? "" : "hidden"
        }`}
      >
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-blue-300" : "")}
        >
          Search A Job
        </NavLink>
        <NavLink
          to={"/post-job"}
          className={({ isActive }) => (isActive ? "text-blue-300" : "")}
        >
          Post A Job
        </NavLink>
        <NavLink
          to={"/my-jobs"}
          className={({ isActive }) => (isActive ? "text-blue-300" : "")}
        >
          My Jobs
        </NavLink>
        <Link
          to="/login"
          className={({ isActive }) => (isActive ? "text-blue-300" : "")}
        >
          <button>Log In</button>
        </Link>
        <Link
          to="/signup"
          className={({ isActive }) => (isActive ? "text-blue-300" : "")}
        >
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
