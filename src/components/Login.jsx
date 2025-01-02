import axios from "axios";

function handleLogin() {
  let $inputs = document.querySelectorAll("input");

  let data = {
    name: $inputs[0].value,
    email: $inputs[1].value,
    password: $inputs[2].value,
  };

  axios.post("http://localhost:8080/api/login", data, {
      headers: { "Content-Type": "application/json" },
    })
    .then(function (response) {
      console.log(response.data.token);
      sessionStorage.setItem("jwtToken", response.data.token);
      handleSuccessfulLogin();
    })
    .catch(function (error) {
      console.log(error);
      handleFailedLogin();
    });
}

function handleSuccessfulLogin() {
  document.querySelector("#message").textContent = "";
  document.querySelector("#message").textContent = "Login successful!";
  window.location.pathname = "/drugs";
}

function handleFailedLogin() {
  document.querySelector("#message").textContent = "";
  document.querySelector("#message").textContent = "Login failed. Sorry.";
}

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#474E93] to-[#7E5CAD] text-white">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#474E93]">
          Login
        </h2>
        <form id="form" className="space-y-4 mt-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#72BAA9] focus:border-[#72BAA9]"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#72BAA9] focus:border-[#72BAA9]"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#72BAA9] focus:border-[#72BAA9]"
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-[#7E5CAD] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#474E93] focus:outline-none focus:ring-2 focus:ring-[#D5E7B5] focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <p id="message" className="mt-4 text-center text-purple-700 text-sm font-medium"></p>
      </div>
    </div>
  );
}

export default Login;
