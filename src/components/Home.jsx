

function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">
            <div className="text-center bg-white p-10 rounded-lg shadow-lg max-w-lg">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                    Welcome to 💉EasyVax
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                    your vaccination manager.
                </p>

                {!sessionStorage.getItem("jwtToken") && (
                    <div>
                        <a href="/login"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 m-2"
                        >
                        Log in
                        </a>
                        <a href="/signup"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Sign up
                        </a>
                    </div>
                )}
                
            </div>
        </div>
    );
}

export default Home;
