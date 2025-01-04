import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const isAuthenticated = sessionStorage.getItem("jwtToken");
    const isAuthPage = ["/login", "/signup"].includes(location.pathname) || !isAuthenticated;

    return (
        <nav className="bg-[#474E93] p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-[#D5E7B5]">
                    💉EasyVax
                </Link>

                {!isAuthPage && (
                    <div className="space-x-6">
                        <Link
                            to="/"
                            className="text-[#b4a5c9] hover:text-[#72BAA9] transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            to="/drugs"
                            className="text-[#b4a5c9] hover:text-[#72BAA9] transition-colors"
                        >
                            Drugs
                        </Link>
                        <Link
                            to="/vaccinations"
                            className="text-[#b4a5c9] hover:text-[#72BAA9] transition-colors"
                        >
                            Vaccinations
                        </Link>
                        <Link
                            to="/users"
                            className="text-[#b4a5c9] hover:text-[#72BAA9] transition-colors"
                        >
                            Users
                        </Link>
                        <button
                            onClick={() => {
                                sessionStorage.removeItem("jwtToken");
                                window.location.href = "/login";
                            }}
                            className="text-[#b4a5c9] hover:text-[#ff6b6b] transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
