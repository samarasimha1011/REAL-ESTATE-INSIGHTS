import express from "express";
import Property from "../models/Property.js";

const router = express.Router();

// GET /api/insights/summary
router.get("/summary", async (req, res) => {
  try {
    const properties = await Property.find();

    if (!properties.length) {
      return res.json({
        data: {
          avgPrice: 0,
          avgBeds: 0,
          total: 0,
        },
      });
    }

    // calculate safely
    const totalPrice = properties.reduce((acc, p) => acc + (p.price || 0), 0);
    const totalBeds = properties.reduce((acc, p) => acc + (p.beds || 0), 0);

    const avgPrice = totalPrice / properties.length;
    const avgBeds = totalBeds / properties.length;

    res.json({
      data: {
        avgPrice: Math.round(avgPrice),
        avgBeds: Math.round(avgBeds),
        total: properties.length,
      },
    });
  } catch (err) {
    console.error("Error generating insights:", err);
    res.status(500).json({ error: "Failed to fetch insights" });
  }
});

export default router;
