import { Link } from "react-router-dom";

function Navbar() {
    const isAuthPage =
        window.location.pathname === "/login" || window.location.pathname === "/signup" || sessionStorage.getItem("jwtToken") === "";

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
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
