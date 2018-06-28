import React, { Component } from 'react';
import Nav from '@/components/Nav';
import TopImgForMagic from '@/components/TopImgForMagic';
import Footer from '@/components/Footer';

import topImg from '@/assets/images/magic-wg-bg.png';

class MagicWG extends Component {
  
  render() {
    return (
      <div className="JoinUs">
        <div className="JoinUs-header animated bounceInDown">
          <Nav selected="contact" />
        </div>
        <div className="JoinUs-body">
          <TopImgForMagic topImg={topImg} title="MagicWG兵棋推演系统" subTitle="MAGICWG WARGAME DEDUCTION SYSTEM" />
          
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default MagicWG;
