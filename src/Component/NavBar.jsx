import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <div>
            <nav className="flex justify-between bg-slate-100 shadow-lg p-4">
                <div><h1>Phone Shop</h1></div>
                <ul className="flex gap-4">
                  <li> <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                  }>Home</NavLink></li>
                  <li> <NavLink
                  to="/favorites"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                  }>Favorites</NavLink></li>
                  <li> <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                  }>Login</NavLink></li>
               

                </ul>
            </nav>
        </div>
    );
};

export default NavBar;