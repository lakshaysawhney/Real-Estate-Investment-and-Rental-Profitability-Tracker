import React, { useState, useEffect } from "react";
import {
  Home,
} from "lucide-react";
import '../App.css';
import '../index.css';

export default function PropertiesDashboard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch("http://127.0.0.1:8000/show-properties/");
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

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading property data...</p>
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
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
          <div>
            <h1 className="text-3xl font-bold text-blue-700 flex items-center">
              <Home className="mr-3 text-blue-600" />
              Properties Overview
            </h1>
            <p className="text-gray-500 mt-1">Property details and values</p>
          </div>
          <div className="mt-4 md:mt-0 bg-blue-50 px-4 py-2 rounded-full text-blue-700 text-sm font-medium">
            Last updated: {currentDate}
          </div>
        </div>

        {/* Summary Card */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-600 hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <Home size={24} className="text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Total Properties</p>
                <p className="text-2xl font-bold text-gray-800">{totalProperties}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Property Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 font-semibold flex items-center">
            <Home size={20} className="mr-2" />
            Property Details
          </div>
          <div className="overflow-auto max-h-96">
            <table className="w-full text-left">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="p-3 text-gray-600 font-semibold">Property ID</th>
                  <th className="p-3 text-gray-600 font-semibold">Address</th>
                  <th className="p-3 text-gray-600 font-semibold">City</th>
                  <th className="p-3 text-gray-600 font-semibold">Neighbourhood</th>
                  <th className="p-3 text-gray-600 font-semibold">Property Type</th>
                  <th className="p-3 text-gray-600 font-semibold">Purchase Price</th>
                  <th className="p-3 text-gray-600 font-semibold">Current Value</th>
                  <th className="p-3 text-gray-600 font-semibold">Purchase Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((property, index) => (
                  <tr
                    key={property.property_id}
                    className={`border-b border-gray-100 hover:bg-blue-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="p-3 font-medium">{property.property_id}</td>
                    <td className="p-3">{property.address}</td>
                    <td className="p-3">{property.city}</td>
                    <td className="p-3">{property.neighbourhood}</td>
                    <td className="p-3">{property.property_type}</td>
                    <td className="p-3">${property.purchase_price.toLocaleString()}</td>
                    <td className="p-3">${property.current_value.toLocaleString()}</td>
                    <td className="p-3">{new Date(property.purchase_date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm p-4 bg-white rounded-lg shadow-md">
          <p>Made with ❤️ | Property Management Dashboard</p>
        </div>
      </div>
    </div>
  );
}
