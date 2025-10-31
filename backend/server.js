import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initDB } from "./lib/db.js";
import propertiesRouter from "./routes/properties.js";
import insightsRouter from "./routes/insights.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// ✅ Route mounts
app.use("/api/properties", propertiesRouter);
app.use("/api/insights", insightsRouter);

app.get("/", (req, res) => {
  res.send("🏡 Real Estate Insights API ✅");
});

const PORT = process.env.PORT || 8080;

initDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ API running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("❌ Server startup error:", err));
