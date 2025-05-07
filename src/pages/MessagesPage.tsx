import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

interface User {
  id: number;
  name: string;
}

interface Message {
  sender: "me" | "them";
  content: string;
}

const users: User[] = [
  { id: 1, name: "Eyob" },
  { id: 2, name: "Lakew" },
  { id: 3, name: "Getaneh" },
];

const MessagesPage: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(users[0]);
  const [conversations, setConversations] = useState<Record<number, Message[]>>(
    {
      1: [
        { sender: "them", content: "Hi there!" },
        { sender: "me", content: "Hey bro!" },
      ],
      2: [{ sender: "them", content: "How are you?" }],
      3: [],
    }
  );
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!selectedUser || newMessage.trim() === "") return;
    const updated = [
      ...(conversations[selectedUser.id] || []),
      { sender: "me", content: newMessage },
    ];
    setConversations({ ...conversations, [selectedUser.id]: updated });
    setNewMessage("");
  };

  return (
    <div className="container-fluid p-4">
      <h2>Messages</h2>
      <div className="d-flex" style={{ gap: "1rem" }}>
        {/* User List */}
        <Card style={{ width: "250px", height: "500px", overflowY: "auto" }}>
          <Card.Body>
            <h5>Contacts</h5>
            <ul className="list-unstyled">
              {users.map((user) => (
                <li
                  key={user.id}
                  className={`p-2 rounded ${
                    selectedUser?.id === user.id
                      ? "bg-primary text-white"
                      : "text-dark"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedUser(user)}
                >
                  {user.name}
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>

        {/* Chat Area */}
        <Card className="flex-grow-1" style={{ height: "500px" }}>
          <Card.Header>
            <strong>{selectedUser?.name || "Select a user"}</strong>
          </Card.Header>
          <Card.Body className="d-flex flex-column">
            <div className="flex-grow-1 overflow-auto mb-3">
              {selectedUser &&
                conversations[selectedUser.id]?.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`d-flex ${
                      msg.sender === "me"
                        ? "justify-content-end"
                        : "justify-content-start"
                    } mb-2`}
                  >
                    <span
                      className={`p-2 rounded ${
                        msg.sender === "me"
                          ? "bg-primary text-white"
                          : "bg-light text-dark"
                      }`}
                    >
                      {msg.content}
                    </span>
                  </div>
                ))}
            </div>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
            >
              <div className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button variant="primary" type="submit" className="ms-2">
                  Send
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MessagesPage;
