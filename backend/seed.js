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
  title: "Vinings Mauldin",
  images: [
  "https://images.pexels.com/photos/129494/pexels-photo-129494.jpeg?_gl=1*6myc0t*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE5MTk2MjQkbzIkZzEkdDE3NjE5MTk2MzUkajQ5JGwwJGgw",
  "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?_gl=1*1rz1dw3*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE5MTk2MjQkbzIkZzEkdDE3NjE5MTk3NDYkajYwJGwwJGgw",
  "https://images.pexels.com/photos/6315808/pexels-photo-6315808.jpeg?_gl=1*rqqjia*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE5MTk2MjQkbzIkZzEkdDE3NjE5MTk4MjckajU3JGwwJGgw",
  "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?_gl=1*1na2cst*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE5MTk2MjQkbzIkZzEkdDE3NjE5MTk4NjgkajE2JGwwJGgw",
  "https://images.pexels.com/photos/144632/pexels-photo-144632.jpeg?_gl=1*rjxq6z*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE5MTk2MjQkbzIkZzEkdDE3NjE5MjAzMDUkajU5JGwwJGgw"
]
,
  price: 420000,
  sqft: 880,
  beds: 2,
  baths: 2,
  city: "Greenville",
  state: "SC",
  zipcode: "29607",
  propertyType: "Appartment",
},

{
  title: "saluda homes",
  images: [
  "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?_gl=1*1uqwsjp*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE5MTk2MjQkbzIkZzEkdDE3NjE5MjA5MDEkajE3JGwwJGgw",
  "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?_gl=1*1gwsnj7*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE5MTk2MjQkbzIkZzEkdDE3NjE5MjA5MzUkajU1JGwwJGgw",
  "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?_gl=1*1eyb756*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE5MTk2MjQkbzIkZzEkdDE3NjE5MjA5OTUkajU5JGwwJGgw",
  "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?_gl=1*1qts6gr*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE5MTk2MjQkbzIkZzEkdDE3NjE5MjEwNDYkajgkbDAkaDA.",
  "https://images.pexels.com/photos/3623770/pexels-photo-3623770.jpeg?_gl=1*2m2idd*_ga*ODA4NjQxNjg3LjE3NjE4NzEwNjg.*_ga_8JE65Q40S6*czE3NjE5MTk2MjQkbzIkZzEkdDE3NjE5MjEyMTQkajYwJGwwJGgw"
]
,
  price: 280000,
  sqft: 700,
  beds: 2,
  baths: 1,
  city: "Montgomery",
  state: "AL",
  zipcode: "36007",
  propertyType: "house",
},




  {
    title: "Luxury Villa in Los Angeles",
    images: [
  "https://plus.unsplash.com/premium_photo-1687960116506-f31f84371838?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  "https://images.unsplash.com/photo-1756064171366-2f6d8c75fd2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMHZpbGxhJTIwaW4lMjBsYXMlMjBhbmdlbGVzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1668277155898-704a26a5cfa3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwdmlsbGElMjBpbiUyMGxhcyUyMGFuZ2VsZXMlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  "https://media.istockphoto.com/id/1456467039/photo/beautiful-living-room-and-kitchen-in-new-luxury-home-with-white-cabinets-wood-beams-pendant.jpg?s=2048x2048&w=is&k=20&c=umzbB1g3iPQ6gcUxCcezIKF8ZuenLdooWCDtZ0-vyps=",
  "https://images.unsplash.com/photo-1562008089-8688febbc3da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwdmlsbGElMjBpbiUyMGxhcyUyMGFuZ2VsZXMlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
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
  
  {
    title: "Oceanview Apartment in Miami",
    images: [
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
      "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg",
      "https://images.pexels.com/photos/261146/pexels-photo-261146.jpeg"
    ],
    price: 680000,
    sqft: 1250,
    beds: 3,
    baths: 2,
    city: "Miami",
    state: "FL",
    zipcode: "33139",
    propertyType: "condo",
  },
  {
    title: "Mountain Cabin in Denver",
    images: [
      "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg",
      "https://images.unsplash.com/photo-1633622672030-24db3a8dfd68?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW91bnRhaW4lMjBDYWJpbiUyMGluJTIwRGVudmVyJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1570793005386-840846445fed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE1vdW50YWluJTIwQ2FiaW4lMjBpbiUyMERlbnZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1695589874975-f5259411a258?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1vdW50YWluJTIwQ2FiaW4lMjBpbiUyMERlbnZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
    ],
    price: 460000,
    sqft: 950,
    beds: 2,
    baths: 1,
    city: "Denver",
    state: "CO",
    zipcode: "80202",
    propertyType: "cabin",
  },
  // Add these new properties after your existing ones

  {
    title: "Seaside Villa in San Diego",
    images: [
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
      "https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg",
      "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg"
    ],
    price: 950000,
    sqft: 2200,
    beds: 4,
    baths: 3,
    city: "San Diego",
    state: "CA",
    zipcode: "92101",
    propertyType: "villa",
  },
  {
    title: "Downtown Loft in Chicago",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80"
    ],
    price: 620000,
    sqft: 1500,
    beds: 3,
    baths: 2,
    city: "Chicago",
    state: "IL",
    zipcode: "60611",
    propertyType: "loft",
  },
  {
    title: "Suburban Home in Charlotte",
    images: [
      "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg",
      "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg",
      "https://images.pexels.com/photos/280216/pexels-photo-280216.jpeg",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
    ],
    price: 420000,
    sqft: 1800,
    beds: 3,
    baths: 2,
    city: "Charlotte",
    state: "NC",
    zipcode: "28202",
    propertyType: "house",
  },
  {
    title: "Modern Condo in Boston",
    images: [
      "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg",
      "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
      "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg"
    ],
    price: 580000,
    sqft: 980,
    beds: 2,
    baths: 2,
    city: "Boston",
    state: "MA",
    zipcode: "02108",
    propertyType: "condo",
  },
  {
    title: "Hillside Cabin in Asheville",
    images: [
      "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg",
      "https://images.pexels.com/photos/273935/pexels-photo-273935.jpeg",
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      "https://images.pexels.com/photos/276693/pexels-photo-276693.jpeg"
    ],
    price: 310000,
    sqft: 900,
    beds: 2,
    baths: 1,
    city: "Asheville",
    state: "NC",
    zipcode: "28801",
    propertyType: "cabin",
  },
  {
    title: "Skyline Apartment in Houston",
    images: [
      "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      "https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg",
      "https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg"
    ],
    price: 520000,
    sqft: 1200,
    beds: 2,
    baths: 2,
    city: "Houston",
    state: "TX",
    zipcode: "77002",
    propertyType: "apartment",
  },
  {
    title: "Riverside Home in Sacramento",
    images: [
      "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg",
      "https://images.pexels.com/photos/259963/pexels-photo-259963.jpeg",
      "https://images.pexels.com/photos/261146/pexels-photo-261146.jpeg",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
    ],
    price: 470000,
    sqft: 1500,
    beds: 3,
    baths: 2,
    city: "Sacramento",
    state: "CA",
    zipcode: "95814",
    propertyType: "house",
  },
  {
    title: "Luxury Penthouse in Las Vegas",
    images: [
      "https://images.unsplash.com/photo-1600585154154-3f98b339b9ab?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80"
    ],
    price: 1600000,
    sqft: 3000,
    beds: 4,
    baths: 4,
    city: "Las Vegas",
    state: "NV",
    zipcode: "89109",
    propertyType: "penthouse",
  },
  {
    title: "Coastal Cottage in Charleston",
    images: [
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg",
      "https://images.pexels.com/photos/261146/pexels-photo-261146.jpeg",
      "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg"
    ],
    price: 390000,
    sqft: 950,
    beds: 2,
    baths: 1,
    city: "Charleston",
    state: "SC",
    zipcode: "29401",
    propertyType: "cottage",
  },
  {
    title: "Downtown Apartment in Philadelphia",
    images: [
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
      "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg"
    ],
    price: 440000,
    sqft: 1100,
    beds: 2,
    baths: 2,
    city: "Philadelphia",
    state: "PA",
    zipcode: "19103",
    propertyType: "apartment",
  },
  {
    title: "Lakeview Cabin in Minneapolis",
    images: [
      "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg",
      "https://images.pexels.com/photos/273935/pexels-photo-273935.jpeg",
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      "https://images.pexels.com/photos/276693/pexels-photo-276693.jpeg"
    ],
    price: 380000,
    sqft: 890,
    beds: 2,
    baths: 1,
    city: "Minneapolis",
    state: "MN",
    zipcode: "55401",
    propertyType: "cabin",
  },
  {
    title: "Urban Flat in San Francisco",
    images: [
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
    ],
    price: 880000,
    sqft: 1250,
    beds: 3,
    baths: 2,
    city: "San Francisco",
    state: "CA",
    zipcode: "94103",
    propertyType: "apartment",
  },
  {
    title: "City Condo in Seattle",
    images: [
      "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg",
      "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
      "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg"
    ],
    price: 470000,
    sqft: 940,
    beds: 2,
    baths: 2,
    city: "Seattle",
    state: "WA",
    zipcode: "98104",
    propertyType: "condo",
  },
  {
    title: "Ranch House in Austin",
    images: [
      "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg",
      "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg",
      "https://images.pexels.com/photos/280216/pexels-photo-280216.jpeg",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
    ],
    price: 610000,
    sqft: 2000,
    beds: 4,
    baths: 3,
    city: "Austin",
    state: "TX",
    zipcode: "73301",
    propertyType: "house",
  },
  {
    title: "Suburban Duplex in Orlando",
    images: [
      "https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
      "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg",
      "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg"
    ],
    price: 390000,
    sqft: 1300,
    beds: 3,
    baths: 2,
    city: "Orlando",
    state: "FL",
    zipcode: "32801",
    propertyType: "duplex",
  },
  {
    title: "Countryside Estate in Vermont",
    images: [
      "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg",
      "https://images.pexels.com/photos/261146/pexels-photo-261146.jpeg",
      "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg",
      "https://images.pexels.com/photos/273935/pexels-photo-273935.jpeg"
    ],
    price: 720000,
    sqft: 2400,
    beds: 5,
    baths: 3,
    city: "Burlington",
    state: "VT",
    zipcode: "05401",
    propertyType: "estate",
  },
  {
    title: "Luxury Mansion in Beverly Hills",
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      "https://images.pexels.com/photos/259963/pexels-photo-259963.jpeg"
    ],
    price: 5200000,
    sqft: 6800,
    beds: 7,
    baths: 6,
    city: "Beverly Hills",
    state: "CA",
    zipcode: "90210",
    propertyType: "mansion",
  },
  {
    title: "Coastal Apartment in Tampa",
    images: [
      "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      "https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg",
      "https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg"
    ],
    price: 470000,
    sqft: 1150,
    beds: 2,
    baths: 2,
    city: "Tampa",
    state: "FL",
    zipcode: "33602",
    propertyType: "apartment",
  },
  {
    title: "Lake House in Madison",
    images: [
      "https://images.pexels.com/photos/259963/pexels-photo-259963.jpeg",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
      "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg"
    ],
    price: 620000,
    sqft: 1950,
    beds: 3,
    baths: 3,
    city: "Madison",
    state: "WI",
    zipcode: "53703",
    propertyType: "lakehouse",
  },
  {
    title: "Downtown Studio in San Jose",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1600&q=80"
    ],
    price: 350000,
    sqft: 750,
    beds: 1,
    baths: 1,
    city: "San Jose",
    state: "CA",
    zipcode: "95126",
    propertyType: "studio",
  },


  {
    title: "Suburban Family Home in Chicago",
    images: [
      "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg",
      "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg",
      "https://images.pexels.com/photos/280216/pexels-photo-280216.jpeg",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
    ],
    price: 520000,
    sqft: 1750,
    beds: 4,
    baths: 3,
    city: "Chicago",
    state: "IL",
    zipcode: "60614",
    propertyType: "house",
  },
  {
    title: "Modern Townhouse in Dallas",
    images: [
      "https://plus.unsplash.com/premium_photo-1742446807137-ba623fdf2f7c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRvd25ob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1629079448081-c6ab9cbea877?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRvd25ob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://plus.unsplash.com/premium_photo-1742457614449-f47edbc188c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHRvd25ob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
    ],
    price: 480000,
    sqft: 1600,
    beds: 3,
    baths: 2,
    city: "Dallas",
    state: "TX",
    zipcode: "75201",
    propertyType: "townhouse",
  },
  {
    title: "Luxury Penthouse in New York City",
    images: [
      "https://images.pexels.com/photos/32372036/pexels-photo-32372036.png",
      "https://images.pexels.com/photos/33634443/pexels-photo-33634443.jpeg",
      "https://images.pexels.com/photos/6970051/pexels-photo-6970051.jpeg",
      "https://images.pexels.com/photos/27543244/pexels-photo-27543244.jpeg"
    ],
    price: 2200000,
    sqft: 3200,
    beds: 4,
    baths: 4,
    city: "New York",
    state: "NY",
    zipcode: "10001",
    propertyType: "penthouse",
  },
  {
    title: "Cozy Cottage in Portland",
    images: [
      "/ZillowPhotos/portland1.jpg",
      "/ZillowPhotos/portland2.jpg",
      "/ZillowPhotos/portland3.jpg",
      "/ZillowPhotos/portland4.jpg"
    ],
    price: 330000,
    sqft: 980,
    beds: 2,
    baths: 1,
    city: "Portland",
    state: "OR",
    zipcode: "97201",
    propertyType: "cottage",
  },
  {
    title: "Beachfront Villa in Malibu",
    images: [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
      "https://plus.unsplash.com/premium_photo-1746327707391-d095ac370b9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2hmcm9udCUyMHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
    ],
    price: 1850000,
    sqft: 2900,
    beds: 5,
    baths: 4,
    city: "Malibu",
    state: "CA",
    zipcode: "90265",
    propertyType: "villa",
  },
  {
    title: "Urban Loft in Atlanta",
    images: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      "https://images.unsplash.com/photo-1664159302000-cef53d678f4f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJiYW4lMjBsb2Z0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1664159302000-cef53d678f4f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJiYW4lMjBsb2Z0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://plus.unsplash.com/premium_photo-1682125925068-1ef733a01612?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHVyYmFuJTIwbG9mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
    ],
    price: 410000,
    sqft: 1200,
    beds: 2,
    baths: 2,
    city: "Atlanta",
    state: "GA",
    zipcode: "30303",
    propertyType: "loft",
  },
  {
    title: "Downtown Condo in Phoenix",
    images: [
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
      "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg",
      "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg"
    ],
    price: 390000,
    sqft: 1000,
    beds: 2,
    baths: 2,
    city: "Phoenix",
    state: "AZ",
    zipcode: "85004",
    propertyType: "condo",
  },
  {
    title: "Country Ranch in Nashville",
    images: [
      "https://plus.unsplash.com/premium_photo-1666241368300-a1115df75b7c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291bnRyeXNpZGUlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://media.istockphoto.com/id/147293345/photo/montana-ranch.jpg?b=1&s=612x612&w=0&k=20&c=HUmYtAvDdDm1X7PYEos6252VDKLN55Q0EfX_AHAagpg=",
      "https://images.pexels.com/photos/33600365/pexels-photo-33600365.jpeg",
      "https://images.pexels.com/photos/27409033/pexels-photo-27409033.jpeg"
    ],
    price: 570000,
    sqft: 1850,
    beds: 4,
    baths: 3,
    city: "Nashville",
    state: "TN",
    zipcode: "37203",
    propertyType: "ranch",
  }
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
