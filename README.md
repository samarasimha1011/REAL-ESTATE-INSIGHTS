# Real Estate Insights API


## Scripts
- `npm run dev` – start with nodemon
- `npm start` – start server
- `npm run seed` – seed properties (file or mongo)


## Env
- `DATA_MODE=file` (default) uses `data/seed-properties.json`
- `DATA_MODE=mongo` + `MONGO_URI` to persist in MongoDB


## Routes
- `GET /api/properties` – query params: city, state, minPrice, maxPrice, minSqft, maxSqft, beds, baths, type, search
- `GET /api/insights/summary` – returns averages and city aggregates
- `POST /api/insights/estimate` – body: `{ sqft, beds, baths, city, propertyType, yearBuilt }`