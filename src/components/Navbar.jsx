import { Link, NavLink } from "react-router-dom"
import { useContext, useState, useRef, useEffect } from "react"
import { AuthContext } from "../context/auth.context"

const Navbar = () => {

    const { user, logOutUser, getToken } = useContext(AuthContext)
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <nav className="group bg-indigo-500 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">
                    INfluence
                </Link>

                {user && user.role === 'Company' && (
                    <>
                        {user && user.role === 'Company' && (
                            <>
                                <NavLink to="/search" className="text-white hover:font-bold">Search</NavLink>
                                <NavLink to="/database" className="text-white hover:font-bold">Database</NavLink>
                            </>
                        )}
                    </>
                )}

                <div className="space-x-4">
                    
                    {getToken() && (
                        <div className="relative " ref={dropdownRef}>
                            <button
                                onClick={toggleDropdown}
                                className="text-white hover:font-bold focus:outline-none"
                            >
                                {user ? user.username : 'Profile'}
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






