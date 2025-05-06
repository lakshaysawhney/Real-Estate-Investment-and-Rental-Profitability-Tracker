import React, { useState, useEffect } from "react";
import { Building2 } from "lucide-react";
import '../App.css';
import '../index.css';

export default function RentalsDashboard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch("http://127.0.0.1:8000/show-rentals/");
        const json = await response.json();

        if (Array.isArray(json)) {
          setData(json);
        } else {
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

  const totalRentals = data.length;

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <p className="text-gray-600">Loading rental data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-red-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-red-500 text-5xl mb-4">!</div>
          <h2 className="text-xl font-bold mb-2">Data Load Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-5xl mx-auto p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
          <div>
            <h1 className="text-3xl font-bold text-blue-700 flex items-center">
              <Building2 className="mr-3 text-blue-600" />
              Rental Agreements
            </h1>
            <p className="text-gray-500 mt-1">Lease information overview</p>
          </div>
          <div className="mt-4 md:mt-0 bg-blue-50 px-4 py-2 rounded-full text-blue-700 text-sm font-medium">
            Last updated: {currentDate}
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600 hover:shadow-lg">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Building2 size={24} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase">Total Rentals</p>
                <p className="text-2xl font-bold">{totalRentals}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rental Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 font-semibold flex items-center">
            <Building2 size={20} className="mr-2" />
            Rental Details
          </div>
          <div className="overflow-auto max-h-96">
            <table className="w-full text-left">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="p-3 text-gray-600 font-semibold">Rental ID</th>
                  <th className="p-3 text-gray-600 font-semibold">Property ID</th>
                  <th className="p-3 text-gray-600 font-semibold">Tenant</th>
                  <th className="p-3 text-gray-600 font-semibold">Monthly Rent</th>
                  <th className="p-3 text-gray-600 font-semibold">Lease Start</th>
                  <th className="p-3 text-gray-600 font-semibold">Lease End</th>
                </tr>
              </thead>
              <tbody>
                {data.map((rental, index) => (
                  <tr
                    key={rental.rental_id}
                    className={`border-b border-gray-100 hover:bg-blue-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="p-3">{rental.rental_id}</td>
                    <td className="p-3">{rental.property_id}</td>
                    <td className="p-3">{rental.tenant_name}</td>
                    <td className="p-3">₹{rental.monthly_rent.toLocaleString()}</td>
                    <td className="p-3">{new Date(rental.lease_start).toLocaleDateString()}</td>
                    <td className="p-3">{new Date(rental.lease_end).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm p-4 bg-white rounded-lg shadow-md">
          <p>Made with ❤️ | Rental Management Dashboard</p>
        </div>
      </div>
    </div>
  );
}
