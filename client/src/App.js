import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { Provider } from "react-redux";
import store from "./store";

import Dashboard from "./components/dashboard/Dashboard";
import AddTest from "./components/addtest/AddTest";
import HistoryChart from "./components/history/HistoryChart";
import Navbar from "./components/layout/Navbar";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/history" component={HistoryChart} />
            <Route exact path="/add" component={AddTest} />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
