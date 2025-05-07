import React from "react";
import StatCard from "../components/StatCard";

const DashboardHome: React.FC = () => (
  <div className="container-fluid p-4">
    <div className="row">
      <StatCard title="Users" value="1200" />
      <StatCard title="Revenue" value="$8,500" />
      <StatCard title="Visits" value="23,000" />
    </div>
  </div>
);

export default DashboardHome;
