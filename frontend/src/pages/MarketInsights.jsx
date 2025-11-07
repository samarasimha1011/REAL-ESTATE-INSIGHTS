import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import "./MarketInsights.css";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

export default function MarketInsights() {
  const cityPriceData = {
    labels: ["San Jose", "Seattle", "Los Angeles", "Austin"],
    datasets: [
      {
        label: "Average Price ($)",
        data: [541667, 350000, 1200000, 550000],
        backgroundColor: "rgba(0, 119, 204, 0.8)",
        borderRadius: 8,
        barThickness: 60,
      },
    ],
  };

  const propertyTypeData = {
    labels: ["House", "Condo", "Villa", "Apartment"],
    datasets: [
      {
        data: [1, 1, 1, 1],
        backgroundColor: [
          "#0077cc",
          "#36a2eb",
          "#4bc0c0",
          "#ffce56",
        ],
        borderWidth: 2,
        borderColor: "#fff",
      },
    ],
  };

  return (
    <div className="market-page">
      <h1 className="market-title">📊 Market Insights</h1>
      <p className="market-subtitle">
        Analyze trends, property types, and average prices across major cities.
      </p>

      <div className="charts-container">
        <div className="chart-card">
          <h3>Average Price by City</h3>
          <div className="chart-wrapper">
            <Bar data={cityPriceData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="chart-card">
          <h3>Property Type Distribution</h3>
          <div className="chart-wrapper">
            <Pie data={propertyTypeData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
  );
}
