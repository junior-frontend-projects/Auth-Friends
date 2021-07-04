import React from "react";
import Login from "./components/Login";
import Friends from "./components/Friends";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <div className="nav">
          <span className="title">Friend List </span> <br />
            You must login to see.
          <div className="links">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/friends">Friends</Link>
              </li>
            </ul>
          </div>
        </div>
        <Switch>
          {/*  Add a route for a login page and build out a simple login form with
          username and password inputs and a submit button */}
          <PrivateRoute exact path="/friends" component={Friends} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;