import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => (
  <div className="bg-dark text-white vh-100 p-3" style={{ width: "250px" }}>
    <h4>Dashboard</h4>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link className="nav-link text-white" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/stats">
          Stats
        </Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
