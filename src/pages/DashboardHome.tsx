import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button, ListGroup, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Legend,
} from "recharts";
import { FaUsers, FaDollarSign, FaTasks, FaChartLine, FaSearch, FaBell, FaEnvelope, FaCog, FaInfoCircle } from "react-icons/fa";

const data = [
  { name: "Mon", users: 400, revenue: 2400, tasks: 24 },
  { name: "Tue", users: 300, revenue: 1398, tasks: 18 },
  { name: "Wed", users: 500, revenue: 3800, tasks: 32 },
  { name: "Thu", users: 200, revenue: 1200, tasks: 15 },
  { name: "Fri", users: 600, revenue: 4300, tasks: 28 },
  { name: "Sat", users: 700, revenue: 5200, tasks: 35 },
  { name: "Sun", users: 650, revenue: 4800, tasks: 30 },
];

const recentActivities = [
  { id: 1, action: "New user registered", time: "5 minutes ago", details: "John Doe created a new account" },
  { id: 2, action: "Payment received", time: "1 hour ago", details: "Payment of $500 received from Jane Smith" },
  { id: 3, action: "Task completed", time: "2 hours ago", details: "Project milestone completed by team" },
  { id: 4, action: "System update", time: "3 hours ago", details: "System updated to version 2.1.0" },
];


const DashboardHome: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<any>(null);
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState<string>("users");

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);

  const handleQuickAction = (action: string) => {
    // Implement quick action functionality
    console.log(`Quick action clicked: ${action}`);
    // You can add navigation or modal opening logic here
  };

  const handleActivityClick = (activity: any) => {
    setSelectedActivity(activity);
    setShowActivityModal(true);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-white p-3 shadow-sm border rounded">
          <p className="mb-1">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Container fluid className="py-4">

      {/* Stats Cards */}
      <Row className="g-4 mb-4">
        <Col md={4}>
          <Card 
            className="text-dark bg-light shadow-sm h-100"
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedMetric("users")}
          >
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <Card.Title className="text-muted">Total Users</Card.Title>
                  <h3>1,234</h3>
                  <small className="text-success">↑ 12% from last month</small>
                </div>
                <FaUsers size={40} className="text-primary opacity-50" />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card 
            className="text-dark bg-light shadow-sm h-100"
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedMetric("revenue")}
          >
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <Card.Title className="text-muted">Revenue</Card.Title>
                  <h3>$12,345</h3>
                  <small className="text-success">↑ 8% from last month</small>
                </div>
                <FaDollarSign size={40} className="text-success opacity-50" />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card 
            className="text-dark bg-light shadow-sm h-100"
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedMetric("tasks")}
          >
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <Card.Title className="text-muted">Pending Tasks</Card.Title>
                  <h3>23</h3>
                  <small className="text-danger">↑ 5% from last week</small>
                </div>
                <FaTasks size={40} className="text-warning opacity-50" />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-4">
        {/* Charts */}
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Card.Title>Performance Overview</Card.Title>
                <div className="btn-group">
                  <Button
                    variant={selectedMetric === "users" ? "primary" : "outline-primary"}
                    size="sm"
                    onClick={() => setSelectedMetric("users")}
                  >
                    Users
                  </Button>
                  <Button
                    variant={selectedMetric === "revenue" ? "success" : "outline-success"}
                    size="sm"
                    onClick={() => setSelectedMetric("revenue")}
                  >
                    Revenue
                  </Button>
                  <Button
                    variant={selectedMetric === "tasks" ? "warning" : "outline-warning"}
                    size="sm"
                    onClick={() => setSelectedMetric("tasks")}
                  >
                    Tasks
                  </Button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <RechartsTooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey={selectedMetric}
                    stroke={selectedMetric === "users" ? "#007bff" : selectedMetric === "revenue" ? "#28a745" : "#ffc107"}
                    fill={selectedMetric === "users" ? "#007bff" : selectedMetric === "revenue" ? "#28a745" : "#ffc107"}
                    fillOpacity={0.1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>

        {/* Recent Activity */}
        <Col md={4}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Recent Activity</Card.Title>
              <ListGroup variant="flush">
                {recentActivities.map((activity) => (
                  <ListGroup.Item 
                    key={activity.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleActivityClick(activity)}
                    className="hover-bg-light"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div>{activity.action}</div>
                      <small className="text-muted">{activity.time}</small>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Activity Details Modal */}
      <Modal show={showActivityModal} onHide={() => setShowActivityModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedActivity?.action}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedActivity?.details}</p>
          <small className="text-muted">Time: {selectedActivity?.time}</small>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowActivityModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default DashboardHome;
