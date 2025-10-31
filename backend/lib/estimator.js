// Lightweight price estimator: price_per_sqft by city + adjustments
export function estimatePrice(property, corpus) {
if (!property || !corpus?.length) return 0;
const city = property.city;
const inCity = corpus.filter(p => p.city === city && p.sqft > 0);
const basePpsf = inCity.length
? inCity.reduce((acc, p) => acc + p.price / p.sqft, 0) / inCity.length
: corpus.reduce((acc, p) => acc + p.price / p.sqft, 0) / corpus.length;


let price = basePpsf * (property.sqft || 0);
// Simple feature adjustments
price *= 1 + 0.03 * ((property.beds || 0) - 3); // ±3% per bed around baseline 3
price *= 1 + 0.02 * ((property.baths || 0) - 2); // ±2% per bath around baseline 2
if (property.propertyType === 'condo') price *= 0.97;
if (property.propertyType === 'house') price *= 1.02;
if (property.yearBuilt && property.yearBuilt < 1990) price *= 0.96;


return Math.round(Math.max(price, 0));
}