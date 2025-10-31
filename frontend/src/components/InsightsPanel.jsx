import React from "react";

export default function InsightsPanel({ insights }) {
  if (!insights) return null;

  const { avgPrice, avgBeds, total } = insights;

  return (
    <div className="insights-card">
      <h2>Market Insights</h2>
      <ul>
        <li>
          <strong>Average Price:</strong> $
          {avgPrice && avgPrice > 0
            ? avgPrice.toLocaleString("en-IN")
            : "—"}
        </li>
        <li>
          <strong>Average Bedrooms:</strong>{" "}
          {avgBeds && avgBeds > 0 ? avgBeds : "—"}
        </li>
        <li>
          <strong>Total Properties:</strong> {total || "—"}
        </li>
      </ul>
    </div>
  );
}
