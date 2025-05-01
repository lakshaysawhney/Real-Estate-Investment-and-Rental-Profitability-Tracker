import React, { useState } from "react";
import { CalendarClock, PieChart, Home, TimerReset } from "lucide-react";
import '../App.css';
import '../index.css';

export default function DaysToLeaseEndDashboard() {
  const [rentalId, setRentalId] = useState("");
  const [leaseData, setLeaseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheck = async () => {
    if (!rentalId.trim()) {
      setError("Please enter a valid rental ID.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setLeaseData(null);

      const response = await fetch("http://127.0.0.1:8000/days-to-lease-end/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rental_id: rentalId })
      });

      const data = await response.json();

      if (data && data.days_remaining !== undefined) {
        setLeaseData(data);
      } else {
        setError("Unexpected response from server.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to fetch data. Please try again.");
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-100">
      <div className="max-w-3xl mx-auto p-6">
        {/* Header */}
        <div className="bg-white p-6 mb-8 rounded-lg shadow-md border-t-4 border-amber-600 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-amber-700 flex items-center">
              <CalendarClock className="mr-3 text-amber-600" />
              Days Until Lease Ends
            </h1>
            <p className="text-gray-500 mt-1">Check time remaining for a lease</p>
          </div>
          <div className="mt-4 md:mt-0 bg-amber-50 px-4 py-2 rounded-full text-amber-700 text-sm font-medium">
            Last updated: {currentDate}
          </div>
        </div>

        {/* Input Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <label className="block mb-2 text-sm font-medium text-gray-700">Enter Rental ID:</label>
          <input
            type="text"
            value={rentalId}
            onChange={(e) => setRentalId(e.target.value)}
            placeholder="e.g., 203"
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring focus:ring-amber-200"
          />
          <button
            onClick={handleCheck}
            disabled={loading}
            className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition-colors"
          >
            {loading ? "Checking..." : "Check Lease Duration"}
          </button>
          {error && <p className="text-red-600 mt-4">{error}</p>}
        </div>

        {/* Result Card */}
        {leaseData && (
          <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-yellow-500">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Rental ID: {leaseData.rental_id}</h2>
            <p className="text-yellow-600 text-xl font-bold flex justify-center items-center">
              <TimerReset className="mr-2" />
              {leaseData.days_remaining} days remaining
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm p-4 bg-white rounded-lg shadow-md">
          <p>Made with ❤️ | Lease Duration Checker</p>
        </div>
      </div>
    </div>
  );
}
