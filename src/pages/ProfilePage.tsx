import React, { useState } from "react";

const ProfilePage: React.FC = () => {
  const [name, setName] = useState("Eyob");
  const [email, setEmail] = useState("eyoblgetaneh@gmail.com");
  const [bio, setBio] = useState(
    "Software Engineering student at Bahir Dar University."
  );
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    setEditing(false);
    alert("Profile saved!");
  };

  return (
    <div className="container p-4">
      <div className="card shadow-sm p-4">
        <div className="d-flex align-items-center mb-4">
          <img
            src="https://eyobl.com/img/me2.png"
            alt="Profile"
            className="rounded-circle me-3"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />

          <div>
            <h4 className="mb-0">{name}</h4>
            <small className="text-muted">{email}</small>
          </div>
        </div>

        {editing ? (
          <>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Bio</label>
              <textarea
                className="form-control"
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
            <button className="btn btn-success me-2" onClick={handleSave}>
              Save
            </button>
            <button
              className="btn btn-secondary mt-2"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Bio:</strong> {bio}
            </p>
            <button
              className="btn btn-primary"
              onClick={() => setEditing(true)}
            >
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
