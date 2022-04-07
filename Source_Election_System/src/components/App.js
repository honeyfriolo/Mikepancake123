import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import UpdateProfile from "./UpdateProfile"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
        <Router>
          <AuthProvider>
            <Switch>
              <div className="w-100 ">
              <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              </nav>
              </div>
              
              <div className="w-100" style={{ maxWidth: "400px" }}>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              </div>
            </Switch>
          </AuthProvider>
        </Router>
     
    </Container>
  )
}

export default App
