import Navbar from "../components/Navbar";

function Layout({ children }) {
    return (
        <div className="flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
        </div>
    );
}

export default Layout;
