import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ChartsDashboard({ properties = [] }) {
  if (!Array.isArray(properties) || properties.length === 0) {
    return (
      <div className="charts-container">
        <h2>📈 Market Analytics</h2>
        <p style={{ textAlign: "center", color: "#666" }}>
          No data available to show charts yet.
        </p>
      </div>
    );
  }

  // 🏙 Average price per city
  const cityGroups = {};
  for (const p of properties) {
    if (!p.city || !p.price) continue;
    if (!cityGroups[p.city]) cityGroups[p.city] = { total: 0, count: 0 };
    cityGroups[p.city].total += p.price;
    cityGroups[p.city].count++;
  }

  const cityData = Object.keys(cityGroups).map((city) => ({
    city,
    avgPrice: Math.round(cityGroups[city].total / cityGroups[city].count),
  }));

  // 🏘 Property Type Distribution
  const typeGroups = {};
  for (const p of properties) {
    if (!p.propertyType) continue;
    typeGroups[p.propertyType] = (typeGroups[p.propertyType] || 0) + 1;
  }

  const typeData = Object.keys(typeGroups).map((t) => ({
    name: t,
    value: typeGroups[t],
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA46BE"];

  return (
    <div className="charts-container">
      <h2>📈 Market Analytics</h2>
      <div className="chart-grid">
        {/* Bar Chart */}
        <div className="chart-card">
          <h3>Average Price by City</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="city" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="avgPrice" fill="#0078ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="chart-card">
          <h3>Property Type Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={typeData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {typeData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
