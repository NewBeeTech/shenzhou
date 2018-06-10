import './style.css';
import React, { Component } from 'react';
import headImg from '@/assets/images/header-img.svg';


class Header extends Component {
  render() {
    return (
      <div className="Header-img" style={{backgroundImage: `url(${headImg})`, backgroundSize: 'cover'}}>
        <div className="Header-img-bottom">
          <div className="Header-img-item animated bounceIn">
            <div>MAXSim</div>
            <div>多用途仿真平台</div>
          </div>
          <div className="Header-img-item animated bounceIn">
            <div>MagicBook</div>
            <div>综合模拟训练系统</div>
          </div>
          <div className="Header-img-item animated bounceIn">
            <div>MagiclETM</div>
            <div>交互式技术手册开发平台</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
