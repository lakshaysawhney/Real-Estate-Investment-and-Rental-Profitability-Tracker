import React, { useState, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";
import { PieChart, CalendarSearch, Home, IndianRupee } from "lucide-react";
import '../App.css';
import '../index.css';

const formatMonth = (monthStr) => {
  const [year, month] = monthStr.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleString('default', { month: 'short', year: 'numeric' });
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 rounded-md shadow-lg">
        <p className="font-medium text-gray-700">{formatMonth(label)}</p>
        <p className="text-fuchsia-600 font-medium flex items-center">
          <IndianRupee size={16} className="mr-1" />
          Total: ₹{payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export default function TopExpenseMonthsDashboard() {
  const [data, setData] = useState([]);
  const [grouped, setGrouped] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch("http://127.0.0.1:8000/top-months");
        const json = await response.json();

        if (Array.isArray(json)) {
          setData(json);

          const groupedData = {};
          json.forEach((item) => {
            const label = `Property ${item.property_id}`;
            if (!groupedData[label]) groupedData[label] = [];
            groupedData[label].push({ ...item, label: item.month });
          });

          setGrouped(groupedData);
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

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-fuchsia-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fuchsia-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
          <div className="text-red-500 text-5xl mb-4">!</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Data Loading Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            className="bg-fuchsia-600 text-white px-4 py-2 rounded hover:bg-fuchsia-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-fuchsia-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-6 rounded-lg shadow-md border-t-4 border-fuchsia-600">
          <div>
            <h1 className="text-3xl font-bold text-fuchsia-700 flex items-center">
              <CalendarSearch className="mr-3 text-fuchsia-600" />
              Top Expense Months Dashboard
            </h1>
            <p className="text-gray-500 mt-1">Most expensive months by property</p>
          </div>
          <div className="mt-4 md:mt-0 bg-fuchsia-50 px-4 py-2 rounded-full text-fuchsia-700 text-sm font-medium">
            Last updated: {currentDate}
          </div>
        </div>

        {/* Dynamic Property Charts and Tables */}
        {Object.entries(grouped).map(([propertyLabel, months]) => (
          <div key={propertyLabel} className="mb-12">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">{propertyLabel}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Chart */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-500 text-white p-4 font-semibold flex items-center">
                  <PieChart size={20} className="mr-2" />
                  {propertyLabel} - Top Months
                </div>
                <div className="p-4">
                  <ResponsiveContainer width="100%" height={360}>
                    <BarChart data={months} margin={{ top: 20, right: 30, left: 20, bottom: 60 }} barSize={40}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis
                        dataKey="month"
                        tickFormatter={formatMonth}
                        angle={-45}
                        textAnchor="end"
                        height={80}
                        tick={{ fontSize: 12 }}
                        stroke="#6b7280"
                      />
                      <YAxis
                        tick={{ fontSize: 12 }}
                        stroke="#6b7280"
                        tickFormatter={(value) => `₹${value.toLocaleString()}`}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar
                        dataKey="total"
                        name="Total Expense"
                        fill="#d946ef"
                        radius={[6, 6, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Table */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-500 text-white p-4 font-semibold flex items-center">
                  <PieChart size={20} className="mr-2" />
                  {propertyLabel} - Ranked Months
                </div>
                <div className="overflow-auto max-h-96">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 sticky top-0">
                      <tr>
                        <th className="p-3 text-gray-600 font-semibold">Month</th>
                        <th className="p-3 text-gray-600 font-semibold text-right">Expense</th>
                        <th className="p-3 text-gray-600 font-semibold text-right">Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                      {months
                        .sort((a, b) => a.rank - b.rank)
                        .map((item, idx) => (
                          <tr
                            key={`${item.property_id}-${item.month}`}
                            className={`border-b border-gray-100 hover:bg-fuchsia-50 transition-colors ${
                              idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }`}
                          >
                            <td className="p-3 font-medium">{formatMonth(item.month)}</td>
                            <td className="p-3 font-medium text-fuchsia-700 text-right">
                              ₹{item.total.toLocaleString()}
                            </td>
                            <td className="p-3 text-right">{item.rank}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm p-4 bg-white rounded-lg shadow-md">
          <p>Made with ❤️ | Top Expense Months per Property</p>
        </div>
      </div>
    </div>
  );
}
