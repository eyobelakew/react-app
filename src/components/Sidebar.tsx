import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaChartBar,
  FaUserAlt,
  FaCog,
  FaEnvelope,
  FaBell,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

type SectionType = 'main' | 'management' | 'communication';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<Record<SectionType, boolean>>({
    main: true,
    management: true,
    communication: true
  });

  const toggleSection = (section: SectionType) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div 
      className="bg-dark text-white position-fixed h-100" 
      style={{ 
        width: "250px", 
        top: 0, 
        left: 0, 
        zIndex: 1000,
        overflowY: 'auto'
      }}
    >
      <div className="p-3">
        <h4 className="mb-4">Dashboard</h4>
        
        {/* Main Section */}
        <div className="mb-3">
          <div 
            className="d-flex justify-content-between align-items-center mb-2 cursor-pointer"
            onClick={() => toggleSection('main')}
            style={{ cursor: 'pointer' }}
          >
            <h6 className="mb-0">Main</h6>
            {expandedSections.main ? <FaChevronDown /> : <FaChevronRight />}
          </div>
          {expandedSections.main && (
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link 
                  className={`nav-link text-white ${isActive('/') ? 'active bg-primary' : ''}`} 
                  to="/"
                >
                  <FaHome className="me-2" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link text-white ${isActive('/stats') ? 'active bg-primary' : ''}`} 
                  to="/stats"
                >
                  <FaChartBar className="me-2" /> Stats
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Management Section */}
        <div className="mb-3">
          <div 
            className="d-flex justify-content-between align-items-center mb-2 cursor-pointer"
            onClick={() => toggleSection('management')}
            style={{ cursor: 'pointer' }}
          >
            <h6 className="mb-0">Management</h6>
            {expandedSections.management ? <FaChevronDown /> : <FaChevronRight />}
          </div>
          {expandedSections.management && (
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link 
                  className={`nav-link text-white ${isActive('/profile') ? 'active bg-primary' : ''}`} 
                  to="/profile"
                >
                  <FaUserAlt className="me-2" /> Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link text-white ${isActive('/settings') ? 'active bg-primary' : ''}`} 
                  to="/settings"
                >
                  <FaCog className="me-2" /> Settings
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Communication Section */}
        <div className="mb-3">
          <div 
            className="d-flex justify-content-between align-items-center mb-2 cursor-pointer"
            onClick={() => toggleSection('communication')}
            style={{ cursor: 'pointer' }}
          >
            <h6 className="mb-0">Communication</h6>
            {expandedSections.communication ? <FaChevronDown /> : <FaChevronRight />}
          </div>
          {expandedSections.communication && (
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link 
                  className={`nav-link text-white ${isActive('/messages') ? 'active bg-primary' : ''}`} 
                  to="/messages"
                >
                  <FaEnvelope className="me-2" /> Messages
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link text-white ${isActive('/notifications') ? 'active bg-primary' : ''}`} 
                  to="/notifications"
                >
                  <FaBell className="me-2" /> Notifications
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
