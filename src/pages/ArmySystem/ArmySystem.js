import React, { Component } from 'react';
import Nav from '@/components/Nav';
import TopImgForMagic from '@/components/TopImgForMagic';
import Footer from '@/components/Footer';
import ProductIntroduction from '@/components/ProductIntroduction';
import CommonTitle from '@/components/CommonTitle';

import topImg from '@/assets/images/army-system-bg.png';
import magicImg1 from '@/assets/images/army-system-img1.png';
import magicImg2 from '@/assets/images/army-system-img2.png';

class ArmySystem extends Component {
  render() {
    return (
      <div className="JoinUs">
        <div className="JoinUs-header animated bounceInDown">
          <Nav selected="contact" />
        </div>
        <div className="JoinUs-body">
          <TopImgForMagic topImg={topImg} title="陆军兵种战术对抗训练模拟系统" subTitle="ARMY TACTICAL CONFRONTATION TRAINING SIMULATION SYSTEM" />
          <ProductIntroduction 
            title="产品简介" 
            content={
              ['陆军兵种战术对抗训练模拟系统用于陆军合同作战训练中指挥员带兵种分队（模拟器）进行训练，既可训练指挥员的指挥筹划能力，也可训练战斗员的战术能力，是当前陆军模拟训练中的一种非常典型的训练模式，也适用于其它军兵种模拟训练。']}
          />
          
          <div className="magic-st-system-composition">
             <CommonTitle title="系统组成" />
             <div className="magic-st-system-composition-img">
               <img src={magicImg1} alt="" />
             </div>
          </div>

          <div className="magic-wg-product-img">
            <CommonTitle title="系统功能" color="#fff"/>
            <div className="magic-st-system-composition-img">
               <img src={magicImg2} alt="" />
             </div>
          </div>

          <div className="magic-st-technical" />
          
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default ArmySystem;
