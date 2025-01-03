import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./components/Home"
import Drugs from "./components/drugs/Drugs"
import Signup from "./components/users/Signup";
import Login from "./components/users/Login";
import Vaccinations from "./components/vaccinations/Vaccinations";
import { verifySession } from "./utils/auth";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/drugs" element={verifySession() ? <Drugs /> : <Login />} />
          <Route path="/vaccinations" element={verifySession() ? <Vaccinations /> : <Login />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
