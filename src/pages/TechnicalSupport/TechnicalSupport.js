import React, { Component } from 'react';
import Nav from '@/components/Nav';
import TopImg from '@/components/TopImg';
import Recruit from '@/components/Recruit';
import Footer from '@/components/Footer';

import topImg from '@/assets/images/technical-support-img.png';

class TechnicalSupport extends Component {
  render() {
    return (
      <div className="JoinUs">
        <div className="JoinUs-header animated bounceInDown">
          <Nav selected="support" />
        </div>
        <div className="JoinUs-body">
          <TopImg topImg={topImg} title="技术支持" subTitle="Technical Support" />
          111
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default TechnicalSupport;
