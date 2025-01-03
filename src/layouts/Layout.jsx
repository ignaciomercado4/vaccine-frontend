import Navbar from "../components/ui/Navbar";

function Layout({ children }) {
    return (
        <div className="flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
        </div>
    );
}

export default Layout;
