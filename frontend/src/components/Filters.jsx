import React, { useState } from "react";

export default function Filters({ onFilter }) {
  const [filters, setFilters] = useState({
    city: "",
    state: "",
    minPrice: "",
    maxPrice: "",
    beds: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    onFilter(filters);
  };

  const resetFilters = () => {
    setFilters({ city: "", state: "", minPrice: "", maxPrice: "", beds: "", type: "" });
    onFilter({});
  };

  return (
    <div className="filters">
      <input name="city" placeholder="City" value={filters.city} onChange={handleChange} />
      <input name="state" placeholder="State" value={filters.state} onChange={handleChange} />
      <input name="minPrice" placeholder="Min Price" type="number" value={filters.minPrice} onChange={handleChange} />
      <input name="maxPrice" placeholder="Max Price" type="number" value={filters.maxPrice} onChange={handleChange} />
      <input name="beds" placeholder="Bedrooms" type="number" value={filters.beds} onChange={handleChange} />
      <select name="type" value={filters.type} onChange={handleChange}>
        <option value="">All Types</option>
        <option value="house">House</option>
        <option value="condo">Condo</option>
        <option value="apartment">Apartment</option>
        <option value="townhouse">Townhouse</option>
      </select>

      <button onClick={applyFilters}>Apply</button>
      <button onClick={resetFilters}>Reset</button>
    </div>
  );
}
