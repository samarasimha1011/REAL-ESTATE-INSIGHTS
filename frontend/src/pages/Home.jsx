import React, { useEffect, useState } from "react";
import { fetchProperties } from "../api/client.js";
import "./Home.css";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    city: "",
    minPrice: "",
    maxPrice: "",
    beds: "",
    propertyType: "",
  });

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      const res = await fetchProperties();
      setProperties(res.data.data);
    } catch (err) {
      console.error("Error fetching:", err);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredProps = properties.filter((p) => {
    const matchCity = !filters.city || p.city.toLowerCase().includes(filters.city.toLowerCase());
    const matchType = !filters.propertyType || p.propertyType === filters.propertyType;
    const matchBeds = !filters.beds || p.beds >= parseInt(filters.beds);
    const matchPrice =
      (!filters.minPrice || p.price >= parseInt(filters.minPrice)) &&
      (!filters.maxPrice || p.price <= parseInt(filters.maxPrice));
    return matchCity && matchType && matchBeds && matchPrice;
  });

  return (
    <div className="home-container">
      {/* Top Search Bar */}
      <div className="search-header">
        <h1>Real Estate Explorer</h1>
        <div className="filters">
          <input
            type="text"
            name="city"
            placeholder="Search city"
            value={filters.city}
            onChange={handleFilterChange}
          />
          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleFilterChange}
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
          <select name="beds" value={filters.beds} onChange={handleFilterChange}>
            <option value="">Beds</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
          <select name="propertyType" value={filters.propertyType} onChange={handleFilterChange}>
            <option value="">Type</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
            <option value="apartment">Apartment</option>
          </select>
        </div>
      </div>

      {/* Total Results */}
      <p className="results-count">
        Showing {filteredProps.length} of {properties.length} Properties
      </p>

      {/* Property Grid */}
      <div className="property-grid">
        {filteredProps.map((p) => (
          <div key={p._id} className="listing-card">
            <img
              src={p.images?.[0] || p.imageUrl}
              alt={p.title}
              className="listing-image"
            />
            <div className="listing-info">
              <h3>${p.price.toLocaleString()}</h3>
              <p>
                {p.beds} Beds • {p.baths} Baths • {p.sqft} sqft
              </p>
              <p className="address">{p.city}, {p.state} {p.zipcode}</p>
              <p className="type">{p.propertyType}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
