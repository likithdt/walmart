import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "#0056b3" : "#333",
    borderBottom: isActive ? "2px solid #0056b3" : "none",
    paddingBottom: "4px",
    fontWeight: 500,
  });

  return (
    <Router>
      <div style={{ fontFamily: "sans-serif" }}>
        {/* ✅ Navbar */}
        <nav
          style={{
            background: "#fff",
            padding: "15px 30px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "#0056b3", fontWeight: "bold", fontSize: "24px" }}>Walmart</h1>
          <ul style={{ display: "flex", listStyle: "none", gap: "30px", margin: 0 }}>
            <li><NavLink to="/" end style={linkStyle}>Home</NavLink></li>
            <li><NavLink to="/about" style={linkStyle}>About</NavLink></li>
            <li><NavLink to="/contact" style={linkStyle}>Contact</NavLink></li>
          </ul>
        </nav>

        {/* ✅ Page Content */}
        <div style={{ padding: "30px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
