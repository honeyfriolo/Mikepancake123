import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import Vote from "./Vote"
import Result from "./Result"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
        <Router>
          <AuthProvider>
            <Switch>
           
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/vote" component={Vote} />
              <Route path="/Result" component={Result} />
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