import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
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
          <span>{user ? user : "Guest"}</span>{" "}
          {/* Display username or 'Guest' */}
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
