import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home';
import JoinUs from './pages/JoinUs';
import TechnicalSupport from './pages/TechnicalSupport'
import ContactUs from './pages/ContactUs'
import Dynamic from './pages/Dynamic'
import AboutUs from './pages/AboutUs'
import CorporateCulture from './pages/CorporateCulture'
import MagicWG from './pages/MagicWG'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          {/* 加入我们 */}
          <Route path="/join-us" component={JoinUs} />
          {/* 技术支持 */}
          <Route path="/technical-support" component={TechnicalSupport} />
          {/* 联系我们 */}
          <Route path="/contact-us" component={ContactUs} />
          {/* 公司动态 */}
          <Route path="/dynamic" component={Dynamic} />
          {/* 公司资质*/}
          <Route path="/about-us" component={AboutUs} />
          {/* 企业文化 */}
          <Route path="/corporate-culture" component={CorporateCulture} />
          {/* 兵棋推演系统 */}
          <Route path="/magic-wg" component={MagicWG} />
          
        </div>
      </Router>
    );
  }
}

export default App;
