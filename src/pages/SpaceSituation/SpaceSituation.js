import React, { Component } from 'react';
import Nav from '@/components/Nav';
import TopImgForMagic from '@/components/TopImgForMagic';
import Footer from '@/components/Footer';
import ProductIntroduction from '@/components/ProductIntroduction';
import CommonTitle from '@/components/CommonTitle';
import CharacteristicsRow from '@/components/CharacteristicsRow'
import Carousel from '@/components/Carousel'
import { projectData } from './SpaceSituationData';

import topImg from '@/assets/images/magic-st-bg.png';
import magicImg from '@/assets/images/magic-st-img1.png';

class SpaceSituation extends Component {
  render() {
    return (
      <div className="JoinUs">
        <div className="JoinUs-header animated bounceInDown">
          <Nav selected="contact" />
        </div>
        <div className="JoinUs-body">
          <TopImgForMagic topImg={topImg} title="MAXSim仿真平台" subTitle="MAXSIM SIMULATION PLATFORM" />
          <ProductIntroduction 
            title="产品简介" 
            content={
              ['MAXSim是我公司基于先进的GBB技术和DMAS技术的系统架构研发完成的自主可控分布式仿真平台，实现了巨大实体数量（100万个）的实时仿真，它具有精细全面的装备建模能力、可视化行为建模能力和强大的运行管理能力。MAXSim仿真平台提供了装备建模、行为建模、想定制作、运行监控、过程回放等一系列工具，支持模型建立、想定制作、仿真运行、数据分析等重要过程。 ']}
          />
          <div className="magic-st-system-composition-img">
              <img src={magicImg} alt="" />
          </div>

          <div className="magic-st-system-composition">
            <ProductIntroduction 
              title="系统功能" 
              content={
                ['MAXSim平台覆盖了实况仿真、虚拟仿真和构造仿真领域，可广泛的应用于各军兵种战役战术仿真和武器装备论证。MAXSim所提供的开发接口（SDK），具有良好的开放性和扩展性，能很好地支持各种定制开发。']}
            />
          </div>

          <div className="magic-wg-product-img">
            <CommonTitle title="产品图片" color="#fff"/>
            {/* <Carousel data={projectData} /> */}
          </div>

          <div className="magic-st-technical">
            <CommonTitle title="典型案例" />
          </div>
          
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default SpaceSituation;