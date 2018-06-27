import React, { Component } from 'react';
import Nav from '@/components/Nav';
import TopImg from '@/components/TopImg';
import Footer from '@/components/Footer';
import CorporateCultureTitle from './CorporateCultureTitle';
import { data } from './CorporateCultureData';

import topImg from '@/assets/images/corporate-culture-bg.png';

class CorporateCulture extends Component {
  showImg(datas) {
    const views = [];
    if(datas) {
      datas.map((item, key) => {
        views.push(
          <div className="core-idea-item">
             <div className="core-idea-item-imgdiv">
               <img src={item.img} alt="" className="core-idea-img"/>
              </div>
             <div className="core-idea-item-title">{item.title}</div>
          </div>
        )
      })
    }
    return views;
  }
  render() {
    return (
      <div className="JoinUs">
        <div className="JoinUs-header animated bounceInDown">
          <Nav selected="contact" />
        </div>
        <div className="JoinUs-body">
          <TopImg topImg={topImg} title="公司文化" subTitle="ABOUT US" />
          <div className="core-idea">
             <CorporateCultureTitle title="核心理念" EnglishTitle="Core Philosophy"/>
          </div>
          <div className="corporate-culture">
              <CorporateCultureTitle title="办公环境" EnglishTitle="Office environment"/>
              <div className="core-idea-content">
                  {this.showImg(data)}
              </div>
          </div>
          <div className="core-idea">
             <CorporateCultureTitle title="员工风采" EnglishTitle="Staff Presence"/>
          </div>
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default CorporateCulture;
