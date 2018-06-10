import './style.css';
import React, { Component } from 'react';
import shiming from '@/assets/images/shiming.svg';
import jiazhi from '@/assets/images/jiazhi.svg';
import yuanjing from '@/assets/images/yuanjing.svg';
import bgImg from '@/assets/images/company-bg.svg';
import arrowRight from '@/assets/images/arrow-right.svg';

const list = [{
  icon: shiming,
  title: '使命',
  content: '科学为军 产业报国',
}, {
  icon: jiazhi,
  title: '核心价值观',
  content: '服务军队军工 开拓创新进取 ',
}, {
  icon: yuanjing,
  title: '愿景',
  content: '神州走进新时代 军民融合谱华章',
}]
class Company extends Component {
  renderItem () {
    const view = []
    list.map((item, index) => {
      view.push(
        <div key={index} className="Company-item">
          <img src={item.icon} alt="使命" />
          <div className="Company-item-title">
            <span>
              {item.title}
            </span>
          </div>
          <div className="Company-item-content">
            {item.content}
          </div>
        </div>
      )
      return item;
    })
    return view;
  }
  render() {

    return (
      <div className="Company" style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover'}}>
        <div className="Company-top animated fadeInDown">
          {this.renderItem()}
        </div>
        <div className="Company-bottom animated fadeInUp">
          北京神舟智汇科技有限公司国防科技大学技术力量为依托、专门从事军事模拟仿真与武器装备配套产品技术开发的高科技公司，是北京市高新技术企业和双软企业，具有武器装备科研生产部分资质，并通过了ISO9001/GJB9001体系认证，具有近百项软件著作权和产品专利。公司技术力量雄厚，经过十多年的潜心研究，公司开发完成了一系列军事仿真系统、模拟训练装备等产品和大量经典案例。
          <a  className="Company-show-more" href="">查看更多<img src={arrowRight} alt="arrow-right"/></a>
        </div>
      </div>
    );
  }
}

export default Company;
