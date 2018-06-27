import React, { Component } from 'react';
import Nav from '@/components/Nav';
import TopImg from '@/components/TopImg';
import Footer from '@/components/Footer';

import topImg from '@/assets/images/join_us_bg.png';

class CorporateCulture extends Component {
  render() {
    return (
      <div className="JoinUs">
        <div className="JoinUs-header animated bounceInDown">
          <Nav selected="contact" />
        </div>
        <div className="JoinUs-body">
          <TopImg topImg={topImg} title="公司文化" subTitle="ABOUT US" />
          <div className="JoinUs-content">

          </div>
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default CorporateCulture;
