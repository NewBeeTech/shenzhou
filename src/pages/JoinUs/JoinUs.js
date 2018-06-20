import React, { Component } from 'react';
import Nav from '@/components/Nav';
import TopImg from '@/components/TopImg';
import Recruit from '@/components/Recruit';
import Footer from '@/components/Footer';

import topImg from '@/assets/images/join_us_bg.png';

class JoinUs extends Component {
  render() {
    return (
      <div className="JoinUs">
        <div className="JoinUs-header animated bounceInDown">
          <Nav selected="home" />
        </div>
        <div className="JoinUs-body">
          <TopImg topImg={topImg} title="加入我们" subTitle="JOIN US" />
          <div className="JoinUs-content">
            <Recruit />

          </div>
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default JoinUs;
