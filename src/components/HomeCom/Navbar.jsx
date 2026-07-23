import { NavLink } from "react-router";
import { FaBolt, FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useContext } from "react";
import { MyStore } from "../../Context/MyContext";

const Navbar = () => {
  let {loggedIn,setLoggedIn,cartItems,setIsCartOpen} = useContext(MyStore);

  const handleLogout=()=>{
     setLoggedIn(null);
       localStorage.removeItem("loggedInUser");
      <Navigate to="/" />
  }
  return (
    <nav className="w-full bg-[#11131c] text-white px-10 py-4 flex justify-between items-center">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-lime-400 flex justify-center items-center">
          <FaBolt className="text-black text-lg" />
        </div>

        <h1 className="text-2xl font-bold">
          Sky<span className="text-lime-400">Mart</span>
        </h1>
      </div>

      {/* Nav Links */}
      <ul className="flex gap-8 text-lg font-medium">
        <NavLink
          to="/main"
          className={({ isActive }) =>
            isActive ? "text-lime-400" : "hover:text-lime-400"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/main/shop"
          className={({ isActive }) =>
            isActive ? "text-lime-400" : "hover:text-lime-400"
          }
        >
          Shop
        </NavLink>

        <NavLink
          to="/main/about"
          className={({ isActive }) =>
            isActive ? "text-lime-400" : "hover:text-lime-400"
          }
        >
          About
        </NavLink>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* User */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-lime-400 text-black flex justify-center items-center font-bold">
           {loggedIn.fullName.charAt(0)}
          </div>

          <span>{loggedIn.fullName}</span>
        </div>

        {/* Cart */}
        <div className="relative cursor-pointer">
          <FaShoppingCart    onClick={() => setIsCartOpen(true)}
    className="cursor-pointer text-xl" />

          <span className="absolute -top-2 -right-2 bg-lime-400 text-black rounded-full w-5 h-5 flex justify-center items-center text-xs font-bold">
            {cartItems.length}
          </span>
        </div>

        {/* Logout */}
        <FiLogOut onClick={handleLogout} className="text-xl cursor-pointer hover:text-lime-400" />

      </div>

    </nav>
  );
};

export default Navbar;