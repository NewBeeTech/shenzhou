import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home';
import JoinUs from './pages/JoinUs';
import TechnicalSupport from './pages/TechnicalSupport'
import ContactUs from './pages/ContactUs'
import Dynamic from './pages/Dynamic'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/join-us" component={JoinUs} />
          <Route path="/technical-support" component={TechnicalSupport} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/dynamic" component={Dynamic} />
        </div>
      </Router>
    );
  }
}

export default App;
