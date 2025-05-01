import React, { useState, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";
import { PieChart, TrendingDown, UserCircle, IndianRupee } from "lucide-react";
import '../App.css';
import '../index.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 rounded-md shadow-lg">
        <p className="font-medium text-gray-700">{label}</p>
        <p className="text-rose-600 font-medium flex items-center">
          <IndianRupee size={16} className="mr-1" />
          Avg Expense: ₹{payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export default function AverageExpenseDashboard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch("http://127.0.0.1:8000/average-expense");
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

  const totalInvestors = data.length;
  const totalExpense = data.reduce((sum, item) => sum + item.avg_expense, 0);
  const avgExpenseOverall = totalInvestors ? (totalExpense / totalInvestors).toFixed(2) : 0;

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const sortedData = [...data].sort((a, b) => b.avg_expense - a.avg_expense);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-rose-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600 mx-auto mb-4"></div>
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
            className="bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-6 rounded-lg shadow-md border-t-4 border-rose-600">
          <div>
            <h1 className="text-3xl font-bold text-rose-700 flex items-center">
              <TrendingDown className="mr-3 text-rose-600" />
              Average Expense per Investor
            </h1>
            <p className="text-gray-500 mt-1">Expense trends across individual portfolios</p>
          </div>
          <div className="mt-4 md:mt-0 bg-rose-50 px-4 py-2 rounded-full text-rose-700 text-sm font-medium">
            Last updated: {currentDate}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-rose-600 hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="bg-rose-100 p-3 rounded-full mr-4">
                <UserCircle size={24} className="text-rose-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Total Investors</p>
                <p className="text-2xl font-bold text-gray-800">{totalInvestors}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-rose-600 hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="bg-rose-100 p-3 rounded-full mr-4">
                <IndianRupee size={24} className="text-rose-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Avg. Expense</p>
                <p className="text-2xl font-bold text-gray-800">₹{Number(avgExpenseOverall).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chart and Table Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Chart */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden order-2 lg:order-1">
            <div className="bg-gradient-to-r from-rose-600 to-rose-500 text-white p-4 font-semibold flex items-center">
              <PieChart size={20} className="mr-2" />
              Average Expense by Investor
            </div>
            <div className="p-4">
              <ResponsiveContainer width="100%" height={360}>
                <BarChart data={sortedData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }} barSize={40}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="name" 
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
                    dataKey="avg_expense" 
                    name="Avg Expense" 
                    fill="#f43f5e" 
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden order-1 lg:order-2">
            <div className="bg-gradient-to-r from-rose-600 to-rose-500 text-white p-4 font-semibold flex items-center">
              <PieChart size={20} className="mr-2" />
              Investor Expense Details
            </div>
            <div className="overflow-auto max-h-96">
              <table className="w-full text-left">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="p-3 text-gray-600 font-semibold">Investor Name</th>
                    <th className="p-3 text-gray-600 font-semibold text-right">Avg Expense</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedData.map((item, index) => (
                    <tr
                      key={item.name}
                      className={`border-b border-gray-100 hover:bg-rose-50 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="p-3 font-medium">{item.name}</td>
                      <td className="p-3 font-medium text-rose-700 text-right">
                        ₹{item.avg_expense.toLocaleString()}
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
          <p>Made with ❤️ | Average Expense Dashboard</p>
        </div>
      </div>
    </div>
  );
}
