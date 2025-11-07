import React, { useState, useEffect } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Filters from "./components/Filters.jsx";
import PropertyCard from "./components/PropertyCard.jsx";
import MarketInsights from "./pages/MarketInsights.jsx";
import Company from "./pages/Company.jsx";
import Sell from "./pages/Sell.jsx";
import "./style/styles.css";

export default function App() {
  const [properties, setProperties] = useState([]);

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

  // ✅ Scroll animation for team cards
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".team-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add("fade-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔹 Navbar */}
      <header className="navbar">
        <div className="navbar-container">
          {/* LEFT SECTION */}
          <div className="navbar-left">
            <Link to="/" className="brand">Zillow.com</Link>
            <nav className="nav-links">
              <NavLink to="/buy">Buy</NavLink>
              <NavLink to="/sell">Sell</NavLink>
              <NavLink to="/company">Company</NavLink>
              <NavLink to="/market-insights">Market Insights</NavLink>
            </nav>
          </div>

          {/* RIGHT SECTION */}
          <div className="navbar-right">
            <NavLink to="/login" className="btn login-btn">Login</NavLink>
            <NavLink to="/signup" className="btn signup-btn">Sign Up</NavLink>
          </div>
        </div>
      </header>

      {/* 🔹 Routes */}
      <main className="bf-main">
        <Routes>

          {/* 🏠 HOME PAGE */}
          <Route
            path="/"
            element={
              <div className="home-container">
                <section
                  className="hero-image"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80')",
                  }}
                >
                  <div className="hero-overlay">
                    <h1>Turn Rent Into Ownership</h1>
                    <p>
                      Contact our team to find your dream home. Instead of paying rent,
                      build your own asset with our easy home loans and flexible EMI plans.
                    </p>
                    <div className="hero-buttons">
                      <Link to="/buy" className="btn-primary">Explore Properties</Link>
                      <Link to="/company" className="btn-secondary">Contact Our Team</Link>
                    </div>
                  </div>
                </section>

                <div className="wave-divider"></div>

                {/* 👥 Team Section */}
                <section className="contact-section">
                  <h2>Meet Our Team</h2>
                  <p className="contact-intro">
                    Our skilled professionals work together to help you achieve your dream of owning a home.
                  </p>

                  <div className="team-grid">
                    <div className="team-card">
                      <img
                        src="ZillowPhotos\IMG_3444[1].jpg"
                        alt="Samara Reddy"
                        className="team-photo"
                      />
                      <h3>Samara Reddy</h3>
                      <p className="role">Full-Stack Developer</p>
                      <p className="contact-detail">
                        📧 <a href="mailto:samarakuthuru@gmail.com">samarakuthuru@gmail.com</a>
                      </p>
                      <p className="contact-detail">📞 +1 (334) 669-2319</p>
                      <a
                        href="https://www.linkedin.com/in/samara-simha-64044a34b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BpU7imc%2FMSWS6jChLEepASg%3D%3D"
                        target="_blank"
                        rel="noreferrer"
                        className="linkedin-link"
                      >
                        View LinkedIn →
                      </a>
                    </div>

                    <div className="team-card">
                      <img
                        src="ZillowPhotos\IMG_7274[2].JPG"
                        alt="Srineesh Konda"
                        className="team-photo"
                      />
                      <h3>Srineesh Konda</h3>
                      <p className="role">UI/UX Designer</p>
                      <p className="contact-detail">
                        📧 <a href="mailto:srineesh@gmail.com">srineesh@gmail.com</a>
                      </p>
                      <p className="contact-detail">📞 +1 (650) 777-9823</p>
                      <a
                        href="https://www.linkedin.com/in/srineeshkonda?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtBvgeakYSzmMJO6RU71HuQ%3D%3D"
                        target="_blank"
                        rel="noreferrer"
                        className="linkedin-link"
                      >
                        View LinkedIn →
                      </a>
                    </div>

                    <div className="team-card">
                      <img
                        src="https://randomuser.me/api/portraits/women/68.jpg"
                        alt="Jane Smith"
                        className="team-photo"
                      />
                      <h3>Jane Smith</h3>
                      <p className="role">Backend Engineer</p>
                      <p className="contact-detail">
                        📧 <a href="mailto:jane@yahoo.com">jane@yahoo.com</a>
                      </p>
                      <p className="contact-detail">📞 +1 (510) 444-8871</p>
                      <a
                        href="https://linkedin.com/in/jane-smith"
                        target="_blank"
                        rel="noreferrer"
                        className="linkedin-link"
                      >
                        View LinkedIn →
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            }
          />

          {/* 🏘️ BUY PAGE */}
          <Route
            path="/buy"
            element={
              <div className="search-page">
                <h1>Find Your Dream Home</h1>
                <Filters onFilter={fetchFiltered} />
                <div className="property-grid">
                  {properties.length > 0 ? (
                    properties.map((p) => <PropertyCard key={p._id} property={p} />)
                  ) : (
                    <p className="no-results">Search a location to explore available properties</p>
                  )}
                </div>
              </div>
            }
          />

          {/* 🏢 COMPANY PAGE */}
          <Route path="/company" element={<Company />} />

          {/* 💰 SELL PAGE */}
          <Route path="/sell" element={<Sell />} />

          {/* 📊 MARKET INSIGHTS */}
          <Route path="/market-insights" element={<MarketInsights />} />
        </Routes>
      </main>
    </>
  );
}
