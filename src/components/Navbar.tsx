import React, { useState, useEffect } from "react";
import { Dropdown, Form, InputGroup, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";

interface Notification {
  id: number;
  message: string;
  time: string;
  read: boolean;
}

interface Message {
  id: number;
  sender: string;
  message: string;
  time: string;
  read: boolean;
}

const Navbar: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const [notifications] = useState<Notification[]>([
    { id: 1, message: "New user registered", time: "5 minutes ago", read: false },
    { id: 2, message: "System update completed", time: "1 hour ago", read: false },
    { id: 3, message: "New sale recorded", time: "2 hours ago", read: true },
  ]);

  const [messages] = useState<Message[]>([
    { id: 1, sender: "John Doe", message: "Can we schedule a meeting?", time: "5 minutes ago", read: false },
    { id: 2, sender: "Jane Smith", message: "Project update required", time: "1 hour ago", read: false },
    { id: 3, sender: "Bob Johnson", message: "Task completed", time: "2 hours ago", read: true },
  ]);

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  const unreadNotifications = notifications.filter(n => !n.read).length;
  const unreadMessages = messages.filter(m => !m.read).length;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4" style={{ marginLeft: "280px" }}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">My Dashboard</span>

        <Form className="d-flex mx-auto" style={{ width: "40%" }} onSubmit={handleSearch}>
          <InputGroup>
            <InputGroup.Text className="bg-light border-end-0">
              <FaSearch className="text-muted" />
            </InputGroup.Text>
            <Form.Control
              type="search"
              placeholder="Search..."
              className="border-start-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputGroup>
        </Form>

        <div className="d-flex align-items-center">
          <Dropdown align="end" className="me-3">
            <Dropdown.Toggle variant="light" className="position-relative border-0">
              <FaBell className="fs-5 text-muted" />
              {unreadNotifications > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {unreadNotifications}
                </span>
              )}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: "300px" }}>
              <Dropdown.Header>Notifications</Dropdown.Header>
              <ListGroup variant="flush">
                {notifications.map((notification) => (
                  <ListGroup.Item
                    key={notification.id}
                    className={`d-flex justify-content-between align-items-start ${
                      !notification.read ? "bg-light" : ""
                    }`}
                  >
                    <div>
                      <p className="mb-1">{notification.message}</p>
                      <small className="text-muted">{notification.time}</small>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Dropdown.Divider />
              <Dropdown.Item href="/notifications" className="text-center">
                View All Notifications
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown align="end" className="me-3">
            <Dropdown.Toggle variant="light" className="position-relative border-0">
              <FaEnvelope className="fs-5 text-muted" />
              {unreadMessages > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {unreadMessages}
                </span>
              )}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: "300px" }}>
              <Dropdown.Header>Messages</Dropdown.Header>
              <ListGroup variant="flush">
                {messages.map((message) => (
                  <ListGroup.Item
                    key={message.id}
                    className={`d-flex justify-content-between align-items-start ${
                      !message.read ? "bg-light" : ""
                    }`}
                  >
                    <div>
                      <p className="mb-1 fw-bold">{message.sender}</p>
                      <p className="mb-1 small">{message.message}</p>
                      <small className="text-muted">{message.time}</small>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Dropdown.Divider />
              <Dropdown.Item href="/messages" className="text-center">
                View All Messages
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown align="end">
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className="d-flex align-items-center border-0"
            >
              <img
                src="https://eyobl.com/img/me2.png"
                alt="User"
                className="rounded-circle me-2"
                width={32}
                height={32}
              />
              <span>{user ? user : "Guest"}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="/settings">Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
