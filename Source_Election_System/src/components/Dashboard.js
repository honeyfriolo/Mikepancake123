import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-success fixed-top ">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarExample01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 font-weight-bold">
              <li class="nav-item active">
                <a class="nav-link text-light" aria-current="page" href="#">
                  Source Election 2021-2022
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="/update-profile">
                  Update Profile
                </a>
              </li>
              <Button className="text-light" variant="link" onClick={handleLogout}>
          Log Out
        </Button>
            </ul>
         
           
          </div>
        </div>
      </nav>

      {/* <div className="w-100 text-center mt-2 ">
        <nav class="navbar navbar-light ">
          <span class="navbar-brand mb-0 h1">Source Election 2021-2022</span>
        </nav>
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card> */}
    </>
  );
}
