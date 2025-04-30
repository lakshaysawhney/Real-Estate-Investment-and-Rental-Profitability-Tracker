
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";
import { ArrowUp, TrendingDown, Home, MapPin, Building, DollarSign, PieChart } from "lucide-react";
import '../App.css'; 
import '../index.css'
const data = [
  {
    property_id: 5,
    address: "101 Riverfront Dr, Austin",
    city: "Austin",
    neighbourhood: "Downtown",
    actual_price_per_sqft: 210.5,
    avg_price_per_sqft: 275.0,
    delta: 64.5,
  },
  {
    property_id: 7,
    address: "88 Hill Street, Denver",
    city: "Denver",
    neighbourhood: "Capitol Hill",
    actual_price_per_sqft: 190.0,
    avg_price_per_sqft: 240.0,
    delta: 50.0,
  },
  {
    property_id: 10,
    address: "345 Willow Ln, Seattle",
    city: "Seattle",
    neighbourhood: "Greenwood",
    actual_price_per_sqft: 320.0,
    avg_price_per_sqft: 360.0,
    delta: 40.0,
  },
  {
    property_id: 3,
    address: "221 Maple Ave, Chicago",
    city: "Chicago",
    neighbourhood: "Lincoln Park",
    actual_price_per_sqft: 230.0,
    avg_price_per_sqft: 260.0,
    delta: 30.0,
  },
];

// Summary metrics
const totalProperties = data.length;
const avgDelta = data.reduce((sum, item) => sum + item.delta, 0) / totalProperties;
const highestDelta = Math.max(...data.map(item => item.delta));

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 rounded-md shadow-lg">
        <p className="font-medium text-gray-700">{label}</p>
        <p className="text-purple-600 font-medium">
          Price Delta: ${payload[0].value}
        </p>
        <p className="text-sm text-gray-500">
          {data.find(item => item.address === label).neighbourhood}
        </p>
      </div>
    );
  }
  return null;
};

export default function XYZTracking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header with Logo and Title */}
        <div className="flex items-center justify-between mb-8 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-purple-600 p-3 rounded-lg mr-4">
              <Building size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
                XYZ TRACKING
              </h1>
              <p className="text-gray-500">Real Estate Analytics Dashboard</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Last updated: April 30, 2025</p>
          </div>
        </div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500 flex items-center">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <Home size={24} className="text-purple-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Properties</p>
              <p className="text-2xl font-bold">{totalProperties}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 flex items-center">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <DollarSign size={24} className="text-blue-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Average Delta</p>
              <p className="text-2xl font-bold">${avgDelta.toFixed(1)}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500 flex items-center">
            <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <ArrowUp size={24} className="text-indigo-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Highest Delta</p>
              <p className="text-2xl font-bold">${highestDelta}</p>
            </div>
          </div>
        </div>
        
        {/* Table Card */}
        <div className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 text-white font-medium flex items-center">
            <PieChart size={20} className="mr-2" />
            <span>Property Details</span>
          </div>
          <div className="p-4 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-purple-700 font-semibold rounded-tl-md">Property ID</th>
                  <th className="p-3 text-purple-700 font-semibold">Address</th>
                  <th className="p-3 text-purple-700 font-semibold">City</th>
                  <th className="p-3 text-purple-700 font-semibold">Neighbourhood</th>
                  <th className="p-3 text-purple-700 font-semibold">Actual Price/Sqft</th>
                  <th className="p-3 text-purple-700 font-semibold">Avg Price/Sqft</th>
                  <th className="p-3 text-purple-700 font-semibold rounded-tr-md">Delta</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr 
                    key={item.property_id} 
                    className={`hover:bg-purple-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="p-3 font-medium">{item.property_id}</td>
                    <td className="p-3">
                      <div className="flex items-center">
                        <MapPin size={16} className="text-purple-500 mr-2" />
                        {item.address}
                      </div>
                    </td>
                    <td className="p-3">{item.city}</td>
                    <td className="p-3">{item.neighbourhood}</td>
                    <td className="p-3 font-medium">${item.actual_price_per_sqft.toFixed(2)}</td>
                    <td className="p-3">${item.avg_price_per_sqft.toFixed(2)}</td>
                    <td className="p-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        <TrendingDown size={14} className="mr-1" />
                        ${item.delta.toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Chart Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 text-white font-medium flex items-center">
            <PieChart size={20} className="mr-2" />
            <span>Price Delta by Property</span>
          </div>
          <div className="p-6">
            <ResponsiveContainer width="100%" height={360}>
              <BarChart 
                data={data} 
                margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                barSize={60}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="address" 
                  angle={-45} 
                  textAnchor="end" 
                  height={80} 
                  interval={0}
                  tick={{fill: '#4a5568', fontSize: 12}}
                  tickLine={false}
                />
                <YAxis 
                  tickFormatter={(value) => `${value}`} 
                  tick={{fill: '#4a5568'}}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{paddingTop: 20}} />
                <Bar 
                  dataKey="delta" 
                  name="Price Delta" 
                  fill="url(#colorGradient)" 
                  radius={[8, 8, 0, 0]}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity={1} />
                    <stop offset="100%" stopColor="#c4b5fd" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2025 XYZ Property Tracking. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}