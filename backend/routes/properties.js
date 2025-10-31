import express from "express";
import Property from "../models/Property.js";

const router = express.Router();

// GET all properties (with optional filters)
router.get("/", async (req, res) => {
  try {
    const filters = {};

    if (req.query.city) filters.city = new RegExp(req.query.city, "i");
    if (req.query.state) filters.state = new RegExp(req.query.state, "i");
    if (req.query.minPrice || req.query.maxPrice) {
      filters.price = {};
      if (req.query.minPrice) filters.price.$gte = Number(req.query.minPrice);
      if (req.query.maxPrice) filters.price.$lte = Number(req.query.maxPrice);
    }
    if (req.query.bedrooms) filters.beds = Number(req.query.bedrooms);
    if (req.query.propertyType && req.query.propertyType !== "All Types") {
      filters.propertyType = req.query.propertyType;
    }

    const properties = await Property.find(filters);
    res.json({ data: properties });
  } catch (err) {
    console.error("Error fetching properties:", err);
    res.status(500).json({ error: "Failed to fetch properties" });
  }
});

export default router;
