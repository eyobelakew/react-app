import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaChartBar,
  FaUserAlt,
  FaCog,
  FaEnvelope,
  FaBell,
} from "react-icons/fa";

const Sidebar: React.FC = () => (
  <div className="bg-dark text-white vh-100 p-3" style={{ width: "250px" }}>
    <h4>Dashboard</h4>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link className="nav-link text-white" to="/">
          <FaHome /> Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/stats">
          <FaChartBar /> Stats
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/profile">
          <FaUserAlt /> Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/settings">
          <FaCog /> Settings
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/messages">
          <FaEnvelope /> Messages
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/notifications">
          <FaBell /> Notifications
        </Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
