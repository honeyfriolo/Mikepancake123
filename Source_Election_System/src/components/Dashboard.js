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
                <p className="text-light pt-3 " >
                  Source Election 2021-2022
                </p>
              </li>
              <Button
                className="text-light ml-5"
                variant="link"
                onClick={handleLogout}
              >
                Log Out
              </Button>
            </ul>
          </div>
        </div>
      </nav>
    
    
<div class="container bootstrap snippets bootdey">
  <div class="row">
    <div class="col-md-6">
      <div class="row">
        <div class="col-md-12 text-center">
          <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="img-polaroid profile-img img-thumbnail " />
        </div>

        <div class="col-md-12  text-center">
          <div class="row">
            <div class="col-md-12">
              <div class="alert alert-success pull-right hide">
                <button type="button" class="close" data-dismiss="alert">×</button>
                You gave a rating of <span id="count">0</span> star(s)
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <h2 class="text-primary"><span class="glyphicon glyphicon-user"></span>John Doe<p class="lead">Please click the stars to vote</p></h2>
            </div>
          </div>
          <div class="row lead">
            <div class="col-md-12  text-center">
              <div id="stars" class="starrr text-warning"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    
    </>
  );
}
