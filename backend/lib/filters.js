export function applyFilters(list, q = {}) {
const {
city,
state,
minPrice,
maxPrice,
minSqft,
maxSqft,
beds,
baths,
type,
search,
} = q;


let out = list;
if (city) out = out.filter(p => p.city?.toLowerCase() === city.toLowerCase());
if (state) out = out.filter(p => p.state?.toLowerCase() === state.toLowerCase());
if (type) out = out.filter(p => p.propertyType === type);
if (beds) out = out.filter(p => Number(p.beds) >= Number(beds));
if (baths) out = out.filter(p => Number(p.baths) >= Number(baths));
if (minPrice) out = out.filter(p => p.price >= Number(minPrice));
if (maxPrice) out = out.filter(p => p.price <= Number(maxPrice));
if (minSqft) out = out.filter(p => p.sqft >= Number(minSqft));
if (maxSqft) out = out.filter(p => p.sqft <= Number(maxSqft));
if (search) {
const s = search.toLowerCase();
out = out.filter(p =>
(p.title || '').toLowerCase().includes(s) ||
(p.city || '').toLowerCase().includes(s) ||
(p.state || '').toLowerCase().includes(s) ||
(p.zipcode || '').includes(s)
);
}
return out;
}


export function summarize(list) {
const byCity = {};
let sum = 0, sumSqft = 0;
for (const p of list) {
sum += p.price;
sumSqft += p.sqft;
byCity[p.city] = byCity[p.city] || { count: 0, total: 0 };
byCity[p.city].count++;
byCity[p.city].total += p.price;
}
const avgPrice = list.length ? Math.round(sum / list.length) : 0;
const avgSqft = list.length ? Math.round(sumSqft / list.length) : 0;
const cityAverages = Object.entries(byCity).map(([city, v]) => ({
city,
averagePrice: Math.round(v.total / v.count),
count: v.count,
}));
return { avgPrice, avgSqft, cityAverages };
}