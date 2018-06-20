import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home';
import JoinUs from './pages/JoinUs';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/join-us" component={JoinUs} />
        </div>
      </Router>
    );
  }
}

export default App;
