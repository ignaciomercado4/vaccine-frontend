import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Drugs from "./components/Drugs"
import Signup from "./components/Signup";
import Login from "./components/Login";
import Vaccinations from "./components/Vaccinations";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/drugs" element={<Drugs />} />
        <Route path="/vaccinations" element={<Vaccinations />} />
      </Routes>
    </Router>
  );
}

export default App;
