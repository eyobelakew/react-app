import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DashboardHome from "./pages/DashboardHome";
import StatsPage from "./pages/StatsPage";

const App: React.FC = () => (
  <Router>
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar />
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
