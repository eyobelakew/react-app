import React from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload(); // force re-render of App component (if needed)
  };

  return (
    <nav className="navbar navbar-light bg-light px-4 d-flex justify-content-between">
      <span className="navbar-brand mb-0 h1">My Dashboard</span>

      <Dropdown align="end">
        <Dropdown.Toggle
          variant="light"
          id="dropdown-basic"
          className="d-flex align-items-center"
        >
          <img
            src="https://eyobl.com/img/me2.png"
            alt="User"
            className="rounded-circle me-2"
            width={32}
            height={32}
          />
          <span>Eyob</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/profile">Profile</Dropdown.Item>
          <Dropdown.Item href="/settings">Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default Navbar;
