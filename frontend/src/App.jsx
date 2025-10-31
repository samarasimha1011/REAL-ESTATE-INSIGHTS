import React, { useEffect, useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { fetchProperties, fetchInsights } from "./api/client.js";
import PropertyCard from "./components/PropertyCard.jsx";
import InsightsPanel from "./components/InsightsPanel.jsx";
import Filters from "./components/Filters.jsx";
import ChartsDashboard from "./components/ChartsDashboard.jsx";
import BluefieldLanding from "./pages/Landing.jsx";
import "./style/styles.css";

export default function App() {
  const [properties, setProperties] = useState([]);
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    // Load previous preference
    return localStorage.getItem("theme") === "dark";
  });

  const fetchFiltered = async (filters = {}) => {
    try {
      const query = new URLSearchParams(filters).toString();
      const res = await fetch(`http://localhost:8080/api/properties?${query}`);
      const data = await res.json();
      setProperties(data.data);
    } catch (err) {
      console.error("Error fetching filtered properties:", err);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const [propsRes, insightRes] = await Promise.all([
          fetchProperties(),
          fetchInsights(),
        ]);
        setProperties(propsRes.data.data);
        setInsights(insightRes.data.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    // Update theme in <html> tag
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      {/* Top Navigation */}
      <header className="bf-nav">
        <div className="bf-nav-inner">
          <Link to="/" className="bf-brand">🏡 RE Insights</Link>
          <nav className="bf-links">
            <NavLink to="/" end>Dashboard</NavLink>
            <NavLink to="/company">Company</NavLink>
          </nav>
          {/* Dark Mode Toggle */}
          <button
            className="theme-toggle"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </header>

      <main className="bf-main">
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <h2 style={{ textAlign: "center" }}>Loading...</h2>
              ) : (
                <div className="container">
                  <h1>🏡 Real Estate Property Insights</h1>

                  <Filters onFilter={fetchFiltered} />

                  {insights && <InsightsPanel insights={insights} />}

                  {properties.length > 0 && (
                    <ChartsDashboard properties={properties} />
                  )}

                  <div className="property-grid">
                    {properties.length > 0 ? (
                      properties.map((p) => (
                        <PropertyCard key={p._id} property={p} />
                      ))
                    ) : (
                      <p>No properties found.</p>
                    )}
                  </div>
                </div>
              )
            }
          />

          <Route path="/company" element={<BluefieldLanding />} />
        </Routes>
      </main>
    </>
  );
}
