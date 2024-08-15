import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-gray-900 p-4 font-bold">
            <ul className="flex space-x-4 justify-center">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white underline"
                                : "text-gray-300 hover:text-white"
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white underline"
                                : "text-gray-300 hover:text-white"
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white underline"
                                : "text-gray-300 hover:text-white"
                        }
                    >
                        Products
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
