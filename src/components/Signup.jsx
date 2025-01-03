import { Link } from "react-router-dom";
import axios from "axios";

async function handleSignup() {
  let $inputs = document.querySelectorAll("input");

  let data = {
    name: $inputs[0].value,
    email: $inputs[1].value,
    password: $inputs[2].value,
  };

  axios
    .post("http://localhost:8080/api/signup", data, {
      headers: { "Content-Type": "application/json" },
    })
    .then(function (response) {
      console.log(response);
    });
}

function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#474E93] to-[#7E5CAD] text-white">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#474E93]">Sign Up</h2>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#72BAA9] focus:border-[#72BAA9]"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#72BAA9] focus:border-[#72BAA9]"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#72BAA9] focus:border-[#72BAA9]"
            />
          </div>
          <button
            type="button"
            onClick={handleSignup}
            className="w-full bg-[#7E5CAD] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#474E93] focus:outline-none focus:ring-2 focus:ring-[#D5E7B5] focus:ring-offset-2"
          >
            Sign up
          </button>
        </form>
        <p className="text-center mt-4 text-sm text-gray-600">
          Log in{" "}
          <Link
            to="/login"
            className="text-[#7E5CAD] hover:text-[#72BAA9] font-medium"
          >
            here.
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
