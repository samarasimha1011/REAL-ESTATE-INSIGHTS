import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: String,
  images: [String],
  price: Number,
  sqft: Number,
  beds: Number,
  baths: Number,
  city: String,
  state: String,
  zipcode: String,
  propertyType: String,
  yearBuilt: Number,
  lotSize: Number
});

const Property = mongoose.model("Property", propertySchema);
export default Property;
