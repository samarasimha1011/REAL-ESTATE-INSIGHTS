import React, { useState } from "react";
import "./PropertyCard.css";

export default function PropertyCard({ property }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  if (!property) return null;

  return (
    <div className="property-card">
      {/* Image Carousel */}
      {property.images && property.images.length > 0 ? (
        <div className="carousel">
          <img
            src={property.images[currentImage]}
            alt={property.title}
            className="carousel-image"
          />
          {property.images.length > 1 && (
            <>
              <button className="carousel-btn prev" onClick={prevImage}>
                ❮
              </button>
              <button className="carousel-btn next" onClick={nextImage}>
                ❯
              </button>
            </>
          )}
        </div>
      ) : (
        <img
          src="/placeholder.jpg"
          alt="No Image"
          className="carousel-image"
        />
      )}

      {/* Property Details */}
      <div className="property-info">
        <h3>{property.title}</h3>
        <p className="price">
          💰 ${property.price.toLocaleString()} | 📐 {property.sqft} sqft
        </p>
        <p>
          🛏 {property.beds} Beds | 🛁 {property.baths} Baths
        </p>
        <p>
          📍 {property.city}, {property.state}
        </p>
      </div>
    </div>
  );
}