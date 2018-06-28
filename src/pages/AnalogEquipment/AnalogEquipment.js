import React, { Component } from 'react';
import Nav from '@/components/Nav';
import TopImgForMagic from '@/components/TopImgForMagic';
import Footer from '@/components/Footer';
import ProductIntroduction from '@/components/ProductIntroduction';
import CommonTitle from '@/components/CommonTitle';
import CharacteristicsRow from '@/components/CharacteristicsRow'
// import { compositionData } from './MagicWGData';

import topImg from '@/assets/images/analog-equipment-bg.png';
import magicImg from '@/assets/images/magic-st-img1.png';

class AnalogEquipment extends Component {
  render() {
    return (
      <div className="JoinUs">
        <div className="JoinUs-header animated bounceInDown">
          <Nav selected="contact" />
        </div>
        <div className="JoinUs-body">
          <TopImgForMagic topImg={topImg} title="模拟训练装备" subTitle="EQUIPMENT SIMULATORS" />
          <CommonTitle title="模拟训练装备 "/>

          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default AnalogEquipment;
