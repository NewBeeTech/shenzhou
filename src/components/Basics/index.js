import './style.css';
// import './animate.min.css';
// import './default.css';
import React, { Component } from 'react';
import bgImg1 from '@/assets/images/basics-bg.svg';
import bgImg2 from '@/assets/images/basics-bg2.png';
import arrowRight from '@/assets/images/arrow-right.svg';
import basicsImg1 from '@/assets/images/basics-img1.svg';
import basicsImg2 from '@/assets/images/basics-img2.svg';
import basicsImg3 from '@/assets/images/basics-img3.svg';

const list = [{
  title: 'MAXSim',
  img: basicsImg1,
  moreUrl: 'more',
  content: 'MAXSim是我公司自主研发的新—代多用途 仿真平台系统，该系统采用先进的 GBB技术和 DMAS系统架构，实现了巨大实体数量 (100万 个)的实时仿真，它具有精细的装备建模、基于 状态机的行为建模和强大的系统运行管理功能， MAXSim仿真平台支持模型建立、想定制作、仿 真运行、数据分析等仿真的全过程，提供了装备 建模、行为建模、想定制作、运行监控等工具， 并且提供 SOK以扩展系统应用。',
}, {
  title: 'MagicBook',
  img: basicsImg2,
  moreUrl: 'more',
  content: 'MagicBook是基于建模和仿真的综合虚拟训练系统，是面向虚拟仿真训练的—站式解决方案。' + <br /> + 'MagicBook是以 MSIMbox为技术内核、通过开发 设计面向业务领域的实体模型和训练想定(课程)构建 而成软件系统。 MSIMbox是支撑综合虚拟训练的完整 工具集，由开发制作环境、管理环境、运行环境组成。',
}, {
  title: 'MagieIETM',
  img: basicsImg3,
  moreUrl: 'more',
  content: '传统设备使用手册、培训手册和 维修手册等大部分以纸介质为主，已 不能满足使用和维护的需要，而集数 字化技术、因特网技术和人工智能技 术于—体的通用交互式电子技术手册 开发平台可以大大提窝设备手册查阅 效率，并可与测试、虚拟维修、虚拟 训练平台直接相连，因此成为目前发 展方向。',
}]
class Basics extends Component {
  getMore (url) {
    console.log(url);
  }
  renderList () {
    const view = [];
    list.map((item, index) => {
      view.push(
        <div key={index} className="Basics-item animated bounceIn" style={{backgroundImage: `url(${index % 2 ? bgImg2 : bgImg1})`, backgroundSize: 'cover'}}>
          <div className="Basics-item-left" style={{backgroundImage: `url(${item.img})`, backgroundSize: 'cover'}}>
          </div>
          <div className="Basics-item-right">
            <div className="Basics-right-title">{item.title}</div>
            <div className="Basics-right-content">
              {item.content}
            </div>
            <div
              className="Basics-right-more"
              onClick={() => this.getMore(item.moreUrl)}
            >查看更多 <img src={arrowRight} alt="arrow-right"/></div>
          </div>
        </div>
      )
      return item;
    })
    return view;
  }
  render() {
    return (
      <div className="Basics">
        {this.renderList()}
      </div>
    );
  }
}

export default Basics;
