import React, { Component } from 'react';
import Nav from '@/components/Nav';
import TopImg from '@/components/TopImg';
import Recruit from '@/components/Recruit';
import Footer from '@/components/Footer';

import topImg from '@/assets/images/technical-support-img.png';

class TechnicalSupport extends Component {
  render() {
    return (
      <div>
        <div>
          <Nav selected="support" />
        </div>
        <div>
          <TopImg topImg={topImg} title="技术支持" subTitle="Technical Support" />
          <div className="support-body">
            <div className="support-body-title">请留下您宝贵的意见或建议</div>
            <div className="inputDiv">
              <input
                  className="inputStyle"
                  onChange={(e) => {
                    this.setState({ withdrawAddress: e .target.value })
                  }}
              />
              <div className="inputLeftText">姓名</div>
            </div>
            <div className="inputDiv">
              <input
                  className="inputStyle"
                  onChange={(e) => {
                    this.setState({ withdrawAddress: e .target.value })
                  }}
              />
              <div className="inputLeftText">邮箱</div>
            </div>
            <div className="inputDiv">
              <input
                  className="inputStyle"
                  onChange={(e) => {
                    this.setState({ withdrawAddress: e .target.value })
                  }}
              />
              <div className="inputLeftText">主题</div>
            </div>
            <div className="inputDiv">
              <textarea
                  className="textarea"
                  onChange={(e) => {
                    this.setState({ withdrawAddress: e .target.value })
                  }}
              />
              <div className="inputLeftText">内容</div>
            </div>
            <div className="submit-button"
               onClick={() => {

               }}
            >确认提交</div>
          </div>

          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default TechnicalSupport;
