import { Link, NavLink } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../context/auth.context"

const Navbar = () => {

    const { logOutUser, getToken } = useContext(AuthContext)
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">
                    INfluence
                </Link>
                <div className="space-x-4">
                    <NavLink
                        exact
                        to="/"
                        activeClassName="text-white font-bold"
                        className="text-white hover:font-bold"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/search"
                        activeClassName="text-white font-bold"
                        className="text-white hover:font-bold"
                    >
                        Search
                    </NavLink>
                    {getToken() && (
                        <div className="relative group">
                            <button
                                onClick={toggleDropdown}
                                className="text-white hover:font-bold focus:outline-none"
                            >
                                Profile
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 inline-block ml-2 text-white group-hover:ml-1 transform group-hover:rotate-180 transition-transform duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg py-2 z-10">
                                    <Link
                                        to="/profile"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                    >
                                        View Profile
                                    </Link>
                                    <button
                                        onClick={logOutUser}
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                    {!getToken() && (
                        <>
                            <NavLink
                                to="/login"
                                activeClassName="text-white font-bold"
                                className="text-white hover:font-bold"
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/signup"
                                activeClassName="text-white font-bold"
                                className="text-white hover:font-bold"
                            >
                                Signup
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </nav>

    )
}

export default Navbar






