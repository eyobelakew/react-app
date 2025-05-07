import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", users: 400 },
  { name: "Tue", users: 300 },
  { name: "Wed", users: 500 },
  { name: "Thu", users: 200 },
  { name: "Fri", users: 600 },
  { name: "Sat", users: 700 },
  { name: "Sun", users: 650 },
];

const DashboardHome: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);

  return (
    <Container fluid className="py-4">
      <Row className="g-4">
        <Col md={4}>
          <Card className="text-dark bg-light shadow-sm">
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <h3>1,234</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-dark bg-light shadow-sm">
            <Card.Body>
              <Card.Title>Revenue</Card.Title>
              <h3>$12,345</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-dark bg-light shadow-sm">
            <Card.Body>
              <Card.Title>Pending Tasks</Card.Title>
              <h3>23</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>User Growth Over the Week</Card.Title>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#007bff"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardHome;
