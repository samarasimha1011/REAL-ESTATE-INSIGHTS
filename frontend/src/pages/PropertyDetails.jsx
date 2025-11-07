import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./PropertyDetails.css";

export default function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/properties/${id}`);
        const data = await res.json();
        if (data.success) {
          setProperty(data.data);
        } else {
          setProperty(null);
        }
      } catch (err) {
        console.error("Error fetching property:", err);
        setProperty(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  if (!property) return <h2 style={{ textAlign: "center" }}>Property not found</h2>;

  return (
    <div className="property-details">
      <Link to="/" className="back-btn">← Back to Listings</Link>
      <div className="image-carousel">
        {property.images?.map((img, i) => (
          <img key={i} src={img} alt={`Property ${i}`} className="property-img" />
        ))}
      </div>
      <div className="details">
        <h1>{property.title}</h1>
        <p className="price">${property.price.toLocaleString()}</p>
        <p className="meta">
          🛏 {property.beds} Beds | 🛁 {property.baths} Baths | 📏 {property.sqft} sqft
        </p>
        <p className="location">📍 {property.city}, {property.state} {property.zipcode}</p>
      </div>
    </div>
  );
}
