import mongoose from "mongoose";
import dotenv from "dotenv";
import Property from "./models/Property.js";
import { initDB } from "./lib/db.js";

dotenv.config();

const seedData = [
  {
    title: "Sunny 3BR House in San Jose",
    images: [
  "https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?_gl=1*7kynjb*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE4NzEwNjgkbzEkZzEkdDE3NjE4NzEwNzIkajU2JGwwJGgw",
  "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?_gl=1*141hfmi*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE4NzEwNjgkbzEkZzEkdDE3NjE4NzEyMTYkajI4JGwwJGgw",
  "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?_gl=1*1no2wg2*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE4NzEwNjgkbzEkZzEkdDE3NjE4NzEyNDYkajU5JGwwJGgw",
  "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?_gl=1*1sepkom*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE4NzEwNjgkbzEkZzEkdDE3NjE4NzEyODYkajE5JGwwJGgw"
]
,
    price: 450000,
    sqft: 1450,
    beds: 3,
    baths: 2,
    city: "San Jose",
    state: "CA",
    zipcode: "95126",
    propertyType: "house",
  },
 {
  title: "Downtown Seattle Condo",
  images: [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1600&q=80"
]
,
  price: 350000,
  sqft: 820,
  beds: 2,
  baths: 1,
  city: "Seattle",
  state: "WA",
  zipcode: "98101",
  propertyType: "condo",
},


  {
    title: "Luxury Villa in Los Angeles",
    images: [
  "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?_gl=1*j63qhw*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE4NzEwNjgkbzEkZzEkdDE3NjE4NzEzMjIkajU1JGwwJGgw",
  "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?_gl=1*e7flv6*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE4NzEwNjgkbzEkZzEkdDE3NjE4NzEzNjgkajkkbDAkaDA.",
  "https://media.istockphoto.com/id/876864896/photo/luxurious-new-construction-home-in-bellevue-wa.jpg?s=2048x2048&w=is&k=20&c=zPRM7OnUrQvip983iI3pVY_Rcr3AT42ukC2HRr7IWcw=",
  "https://media.istockphoto.com/id/1456467039/photo/beautiful-living-room-and-kitchen-in-new-luxury-home-with-white-cabinets-wood-beams-pendant.jpg?s=2048x2048&w=is&k=20&c=umzbB1g3iPQ6gcUxCcezIKF8ZuenLdooWCDtZ0-vyps=",
  "https://media.istockphoto.com/id/1990444472/photo/scandinavian-style-cozy-living-room-interior.jpg?s=2048x2048&w=is&k=20&c=LfC9CR64jGz8vMZMQK9BS6NZKVQVQCo9mNDgH2IivFk="
]
,
    price: 1200000,
    sqft: 2800,
    beds: 5,
    baths: 4,
    city: "Los Angeles",
    state: "CA",
    zipcode: "90046",
    propertyType: "villa",
  },
  {
    title: "Modern Apartment in Austin",
    images: [
  "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?_gl=1*fqpc1g*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE4NzEwNjgkbzEkZzEkdDE3NjE4NzE1NTQkajM4JGwwJGgw",
  "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?_gl=1*9713if*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE4NzEwNjgkbzEkZzEkdDE3NjE4NzE1NzkkajEzJGwwJGgw",
  "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?_gl=1*uw40i3*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE4NzEwNjgkbzEkZzEkdDE3NjE4NzE2MDQkajU0JGwwJGgw",
  "https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?_gl=1*1dn7mln*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE4NzEwNjgkbzEkZzEkdDE3NjE4NzE2MjkkajI5JGwwJGgw",
  "https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?_gl=1*1j7kya3*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE4NzEwNjgkbzEkZzEkdDE3NjE4NzE2NjUkajU5JGwwJGgw"
]
,
    price: 550000,
    sqft: 1100,
    beds: 2,
    baths: 2,
    city: "Austin",
    state: "TX",
    zipcode: "73301",
    propertyType: "apartment",
  },
];


const seedDatabase = async () => {
  try {
    await initDB();
    console.log("✅ Database connected successfully");

    await Property.deleteMany({});
    console.log("🧹 Old properties removed");

    await Property.insertMany(seedData);
    console.log("🌱 Properties seeded successfully!");

    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding data:", err);
    process.exit(1);
  }
};

seedDatabase();
