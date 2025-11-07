import React, { useState } from "react";
import "./Sell.css";

export default function Sell() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    price: "",
    city: "",
    state: "",
    zipcode: "",
    propertyType: "",
    images: [],
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData({ ...formData, images: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Property:", formData);
    alert("✅ Property submitted successfully! Our agent will review it soon.");
    setFormData({
      name: "",
      email: "",
      title: "",
      price: "",
      city: "",
      state: "",
      zipcode: "",
      propertyType: "",
      images: [],
      description: "",
    });
  };

  return (
    <div className="sell-container">
      <header className="sell-header">
        <h1>Sell Your Property</h1>
        <p>
          List your property with us and reach verified buyers quickly.  
          Upload images, fill in property details, and let our experts handle the rest.
        </p>
      </header>

      <form className="sell-form" onSubmit={handleSubmit}>
        {/* Seller Info */}
        <div className="form-row">
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Property Info */}
        <div className="form-row">
          <div className="form-group">
            <label>Property Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Modern 2BHK Apartment"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Price (USD)</label>
            <input
              type="number"
              name="price"
              placeholder="e.g. 450000"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Location */}
        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="e.g. San Francisco"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              name="state"
              placeholder="e.g. CA"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Zipcode</label>
            <input
              type="text"
              name="zipcode"
              placeholder="e.g. 94103"
              value={formData.zipcode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Property Type */}
        <div className="form-group">
          <label>Property Type</label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="villa">Villa</option>
            <option value="townhouse">Townhouse</option>
          </select>
        </div>

        {/* Images Upload */}
        <div className="form-group">
          <label>Upload Property Images</label>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleChange}
          />
          {formData.images.length > 0 && (
            <div className="image-preview">
              {formData.images.map((file, idx) => (
                <img
                  key={idx}
                  src={URL.createObjectURL(file)}
                  alt="Preview"
                  className="preview-thumb"
                />
              ))}
            </div>
          )}
        </div>

        {/* Description */}
        <div className="form-group">
          <label>Property Description</label>
          <textarea
            name="description"
            placeholder="Describe your property in detail..."
            rows="4"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-submit">
          <button type="submit" className="btn-primary">
            Submit Property
          </button>
        </div>
      </form>
    </div>
  );
}
