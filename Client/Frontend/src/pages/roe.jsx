import React, { useState, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";
import { DollarSign, PieChart, Home, Percent, TrendingUp } from "lucide-react";
import '../App.css';
import '../index.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 rounded-md shadow-lg">
        <p className="font-medium text-gray-700">{label}</p>
        <p className="text-green-600 font-medium flex items-center">
          <Percent size={16} className="mr-1" />
          ROE: {payload[0].value.toFixed(2)}%
        </p>
      </div>
    );
  }
  return null;
};

export default function ROEDashboard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch("http://127.0.0.1:8000/roe");
        const json = await response.json();

        if (Array.isArray(json)) {
          setData(json);
        } else {
          console.warn("Unexpected API response format", json);
          setError("Invalid data format received");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const totalProperties = data.length;
  const avgROE = totalProperties
    ? (data.reduce((sum, item) => sum + item.roe, 0) / totalProperties).toFixed(2)
    : 0;

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const sortedData = [...data].sort((a, b) => b.roe - a.roe);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
          <div className="text-red-500 text-5xl mb-4">!</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Data Loading Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
          <div>
            <h1 className="text-3xl font-bold text-green-700 flex items-center">
              <TrendingUp className="mr-3 text-green-600" />
              Return on Equity (ROE) Dashboard
            </h1>
            <p className="text-gray-500 mt-1">Equity performance across your properties</p>
          </div>
          <div className="mt-4 md:mt-0 bg-green-50 px-4 py-2 rounded-full text-green-700 text-sm font-medium">
            Last updated: {currentDate}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600 hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Home size={24} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Total Properties</p>
                <p className="text-2xl font-bold text-gray-800">{totalProperties}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600 hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Percent size={24} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Average ROE</p>
                <p className="text-2xl font-bold text-gray-800">{avgROE}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chart and Table Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Chart */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden order-2 lg:order-1">
            <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-4 font-semibold flex items-center">
              <PieChart size={20} className="mr-2" />
              Return on Equity by Property
            </div>
            <div className="p-4">
              <ResponsiveContainer width="100%" height={360}>
                <BarChart data={sortedData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }} barSize={40}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="address" 
                    angle={-45} 
                    textAnchor="end" 
                    height={80} 
                    tick={{ fontSize: 12 }}
                    stroke="#6b7280"
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }} 
                    stroke="#6b7280"
                    tickFormatter={(value) => `${value.toFixed(0)}%`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="roe" 
                    name="ROE" 
                    fill="#10b981" 
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden order-1 lg:order-2">
            <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-4 font-semibold flex items-center">
              <PieChart size={20} className="mr-2" />
              Property ROE Details
            </div>
            <div className="overflow-auto max-h-96">
              <table className="w-full text-left">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="p-3 text-gray-600 font-semibold">Property ID</th>
                    <th className="p-3 text-gray-600 font-semibold">Address</th>
                    <th className="p-3 text-gray-600 font-semibold text-right">ROE</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedData.map((item, index) => (
                    <tr
                      key={item.property_id}
                      className={`border-b border-gray-100 hover:bg-green-50 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="p-3 font-medium">{item.property_id}</td>
                      <td className="p-3">{item.address}</td>
                      <td className="p-3 font-medium text-green-700 text-right">
                        {item.roe.toFixed(2)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm p-4 bg-white rounded-lg shadow-md">
          <p>Made with ❤️ | Return on Equity Dashboard</p>
        </div>
      </div>
    </div>
  );
}
