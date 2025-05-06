import React, { useEffect, useState } from "react";
import { BarChart3 } from "lucide-react";
import '../App.css';
import '../index.css';

export default function MarketTrendsDashboard() {
  const [trends, setTrends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTrends() {
      try {
        const res = await fetch("http://127.0.0.1:8000/show-marketTrends/");
        const json = await res.json();
        if (Array.isArray(json)) setTrends(json);
        else setError("Invalid data format");
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchTrends();
  }, []);

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric"
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-50">
        <p className="text-gray-600">Loading market trends...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-red-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-red-500 text-5xl mb-4">!</div>
          <h2 className="text-xl font-bold mb-2">Data Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-5xl mx-auto p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-600">
          <div>
            <h1 className="text-3xl font-bold text-indigo-700 flex items-center">
              <BarChart3 className="mr-3 text-indigo-600" />
              Market Trends
            </h1>
            <p className="text-gray-500 mt-1">Neighborhood Investment Insights</p>
          </div>
          <div className="mt-4 md:mt-0 bg-indigo-50 px-4 py-2 rounded-full text-indigo-700 text-sm font-medium">
            Last updated: {currentDate}
          </div>
        </div>

        {/* Market Trends Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white p-4 font-semibold flex items-center">
            <BarChart3 size={20} className="mr-2" />
            City-wise Market Overview
          </div>
          <div className="overflow-auto max-h-96">
            <table className="w-full text-left">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="p-3 text-gray-600 font-semibold">City</th>
                  <th className="p-3 text-gray-600 font-semibold">Neighbourhood</th>
                  <th className="p-3 text-gray-600 font-semibold">Avg Price/Sqft</th>
                  <th className="p-3 text-gray-600 font-semibold">Avg Rent/Sqft</th>
                  <th className="p-3 text-gray-600 font-semibold">Growth Rate (%)</th>
                </tr>
              </thead>
              <tbody>
                {trends.map((item, index) => (
                  <tr
                    key={`${item.city}-${item.neighbourhood}`}
                    className={`border-b border-gray-100 hover:bg-indigo-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="p-3">{item.city}</td>
                    <td className="p-3">{item.neighbourhood}</td>
                    <td className="p-3">₹{item.avg_price_per_sqft.toLocaleString()}</td>
                    <td className="p-3">₹{item.avg_rent_per_sqft}</td>
                    <td className="p-3 text-green-600 font-medium">{item.growth_rate}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm p-4 bg-white rounded-lg shadow-md">
            <p>Made with ❤️ | Market Trends Dashboard</p>
        </div>
      </div>
    </div>
  );
}
