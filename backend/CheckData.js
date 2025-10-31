import mongoose from "mongoose";
import dotenv from "dotenv";
import Property from "./models/Property.js";
import { initDB } from "./lib/db.js";

dotenv.config();

async function checkData() {
  try {
    await initDB();
    console.log("✅ Connected to MongoDB");

    const properties = await Property.find({}, { title: 1, images: 1 });
    console.log("📦 Found properties:", properties.length);
    console.log(JSON.stringify(properties, null, 2));

    process.exit(0);
  } catch (err) {
    console.error("❌ Error fetching data:", err);
    process.exit(1);
  }
}

checkData();
