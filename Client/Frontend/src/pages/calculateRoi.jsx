import React, { useState } from "react";
import { TrendingUp, PieChart, Home, IndianRupee, Calculator } from "lucide-react";
import '../App.css';
import '../index.css';

export default function CalculateROIDashboard() {
  const [propertyId, setPropertyId] = useState("");
  const [roiData, setRoiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCalculate = async () => {
    if (!propertyId.trim()) {
      setError("Please enter a property ID.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setRoiData(null);
      const response = await fetch("http://127.0.0.1:8000/calculate-roi/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ property_id: propertyId })
      });

      const data = await response.json();

      if (data && data.roi !== undefined) {
        setRoiData(data);
      } else {
        setError("Unexpected response from server.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to fetch ROI. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
      <div className="max-w-3xl mx-auto p-6">
        {/* Header */}
        <div className="bg-white p-6 mb-8 rounded-lg shadow-md border-t-4 border-indigo-600 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-indigo-700 flex items-center">
              <Calculator className="mr-3 text-indigo-600" />
              ROI Calculator
            </h1>
            <p className="text-gray-500 mt-1">Calculate Return on Investment for any property</p>
          </div>
          <div className="mt-4 md:mt-0 bg-indigo-50 px-4 py-2 rounded-full text-indigo-700 text-sm font-medium">
            Last updated: {currentDate}
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <label className="block mb-2 text-sm font-medium text-gray-700">Enter Property ID:</label>
          <input
            type="text"
            value={propertyId}
            onChange={(e) => setPropertyId(e.target.value)}
            placeholder="e.g., 101"
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring focus:ring-indigo-200"
          />
          <button
            onClick={handleCalculate}
            disabled={loading}
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition-colors"
          >
            {loading ? "Calculating..." : "Calculate ROI"}
          </button>
          {error && <p className="text-red-600 mt-4">{error}</p>}
        </div>

        {/* Result Section */}
        {roiData && (
          <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-green-500">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Property ID: {roiData.property_id}</h2>
            <p className="text-green-600 text-xl font-bold flex justify-center items-center">
              <TrendingUp className="mr-2" />
              ROI: {roiData.roi.toFixed(2)}%
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm p-4 bg-white rounded-lg shadow-md">
          <p>Made with ❤️ | ROI Calculator Dashboard</p>
        </div>
      </div>
    </div>
  );
}
