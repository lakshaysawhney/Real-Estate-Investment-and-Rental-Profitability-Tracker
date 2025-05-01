import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Dashboard from "./pages/dashboard.jsx";
import Cashflow from './pages/cashflow.jsx';
import NegativeCashflow from './pages/negativeCashflow.jsx';
import ROEDashboard from './pages/roe.jsx';
import GrowthDashboard from './pages/growth.jsx'
import UndervaluedProperties from './pages/undervaluedProperties.jsx';
import ProjectedValueDashboard from './pages/projected.jsx';
import ActiveLeasesDashboard from './pages/activeLeases.jsx';
import AboveMarketRentDashboard from './pages/aboveMarketTrend.jsx';
import TopInvestorsDashboard from './pages/topInvestors.jsx';
import AverageExpenseDashboard from './pages/averageExpanse.jsx';
import NoRentalHighExpenseDashboard from './pages/noRentalHighExpense.jsx';
import MonthlyExpenseDashboard from './pages/monthlyExpense.jsx';
import TopExpenseMonthsDashboard from './pages/topMonths.jsx';
import MonthlyCashflowDashboard from './pages/monthlyCashflow.jsx';
import CalculateROIDashboard from './pages/calculateRoi.jsx';
import DaysToLeaseEndDashboard from './pages/daysToLeaseEnd.jsx';
import OutlierTransactionsDashboard from './pages/outlierTransactions.jsx';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cashflow" element={<Cashflow />} />
        <Route path="/negative-cashflow" element={<NegativeCashflow />} />
        <Route path="/roe" element={<ROEDashboard />} />
        <Route path="/market/growth" element={<GrowthDashboard/>} />
        <Route path="/market/undervalued" element={<UndervaluedProperties/>} />
        <Route path="/market/projection" element={<ProjectedValueDashboard/>} />
        <Route path="/rentals/active-leases" element={<ActiveLeasesDashboard/>} />
        <Route path="/rentals/above-market" element={<AboveMarketRentDashboard/>} />
        <Route path="/investors/top" element={<TopInvestorsDashboard/>} />
        <Route path="/investors/average-expense" element={<AverageExpenseDashboard/>} />
        <Route path="/anomaly/outliers" element={<OutlierTransactionsDashboard/>} />
        <Route path="anomaly/no-rental-high-expense" element={<NoRentalHighExpenseDashboard/>} />
        <Route path="trends/monthly-expense" element={<MonthlyExpenseDashboard/>} />
        <Route path="trends/monthly-expense" element={<MonthlyExpenseDashboard/>} />
        <Route path="trends/top-months" element={<TopExpenseMonthsDashboard/>} />
        <Route path="cashflow/monthly" element={<MonthlyCashflowDashboard/>} />

        {/* PL SQL */}
        <Route path="calculate-roi" element={<CalculateROIDashboard/>} />
        <Route path="days-to-lease-end" element={<DaysToLeaseEndDashboard/>} />

      </Routes>
    </Router>
    </>
  )
}

export default App
