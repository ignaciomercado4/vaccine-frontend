import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./components/Home";
import Drugs from "./components/drugs/Drugs";
import Signup from "./components/users/Signup";
import Login from "./components/users/Login";
import Vaccinations from "./components/vaccinations/Vaccinations";
import { verifySession } from "./utils/auth";

function ProtectedRoute({ children }) {
  const isAuthenticated = verifySession();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; 
  }

  return children; 
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/drugs"
            element={
              <ProtectedRoute>
                <Drugs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vaccinations"
            element={
              <ProtectedRoute>
                <Vaccinations />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
