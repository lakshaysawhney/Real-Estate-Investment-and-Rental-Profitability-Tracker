import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Dashboard from "./pages/dashboard.jsx";
import XYZTracking from "./pages/xyzTracking.jsx";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/xyz-tracking" element={<XYZTracking />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
