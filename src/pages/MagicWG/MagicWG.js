import React, { Component } from 'react';
import Nav from '@/components/Nav';
import TopImgForMagic from '@/components/TopImgForMagic';
import Footer from '@/components/Footer';
import ProductIntroduction from '@/components/ProductIntroduction';

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
          <ProductIntroduction 
            title="产品简介" 
            content={[' 兵棋是各方使用代表战场的棋盘和军事力量的棋子，依据从战争实战经验中总结出的规则，对作战过程进行对抗推演的工具。通过对战争的深刻理解，以对抗方式对战争动态演化过程以及不确定性和偶然性对战争的影响进行推演，具有良好的对抗性、灵活性、逻辑性和严密性，可以深化对战争的认识，启发对问题的思考，找到解决问题的途径，成为研究战争、预测战争的重要工具。', '计算机兵棋推演系统主要用于各军兵种全程序、全要素、全内容作战行动推演，在动态对抗中，提高参训者的分析判断、指挥决策、特情处置、协调控制等综合能力。为作战指挥、军事训练、分队战术等教学实践提供专业平台，为受训者提供实时动态的战场态势、近似实战的训练环境和客观科学的评价手段，使训练由静态变为动态，实现教学资源整合和教学过程控制，增强教与学的互动，优化教学训练模式，提高教学训练效果']}
          />
          
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default MagicWG;
