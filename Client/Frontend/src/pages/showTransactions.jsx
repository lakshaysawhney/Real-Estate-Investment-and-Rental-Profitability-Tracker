import React, { useState, useEffect } from "react";
import { IndianRupee } from "lucide-react";
import '../App.css';
import '../index.css';

export default function TransactionsDashboard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://127.0.0.1:8000/show-transactions/");
        const json = await res.json();
        if (Array.isArray(json)) setData(json);
        else setError("Invalid data format");
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load data.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const totalPurchases = data
    .filter(t => t.type === "purchase")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalSales = data
    .filter(t => t.type === "sale")
    .reduce((acc, t) => acc + t.amount, 0);

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric"
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-50">
        <p className="text-gray-600">Loading transaction data...</p>
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
              <IndianRupee className="mr-3 text-indigo-600" />
              Transactions
            </h1>
            <p className="text-gray-500 mt-1">Purchase and Sale Records</p>
          </div>
          <div className="mt-4 md:mt-0 bg-indigo-50 px-4 py-2 rounded-full text-indigo-700 text-sm font-medium">
            Last updated: {currentDate}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600 hover:shadow-lg">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <IndianRupee size={24} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase">Total Purchases</p>
                <p className="text-2xl font-bold">₹{totalPurchases.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600 hover:shadow-lg">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <IndianRupee size={24} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase">Total Sales</p>
                <p className="text-2xl font-bold">₹{totalSales.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white p-4 font-semibold flex items-center">
            <IndianRupee size={20} className="mr-2" />
            Transaction History
          </div>
          <div className="overflow-auto max-h-96">
            <table className="w-full text-left">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="p-3 text-gray-600 font-semibold">Transaction ID</th>
                  <th className="p-3 text-gray-600 font-semibold">Property ID</th>
                  <th className="p-3 text-gray-600 font-semibold">Type</th>
                  <th className="p-3 text-gray-600 font-semibold">Amount</th>
                  <th className="p-3 text-gray-600 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((tx, index) => (
                  <tr
                    key={tx.transaction_id}
                    className={`border-b border-gray-100 hover:bg-indigo-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="p-3">{tx.transaction_id}</td>
                    <td className="p-3">{tx.property_id}</td>
                    <td className={`p-3 capitalize ${tx.type === "sale" ? "text-red-600" : "text-green-600"}`}>
                      {tx.type}
                    </td>
                    <td className="p-3">₹{tx.amount.toLocaleString()}</td>
                    <td className="p-3">{new Date(tx.transaction_date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm p-4 bg-white rounded-lg shadow-md">
            <p>Made with ❤️ | Transactions Dashboard</p>
        </div>
      </div>
    </div>
  );
}
