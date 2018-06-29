import './style.css';
import React, { Component } from 'react';

import leftImg from '@/assets/images/dynamic-date-left.svg';
import rightImg from '@/assets/images/dynamic-date-right.svg';

class Carousel extends Component {
    state = {
        num: 0
    } 
  render() {
    const lenghtNum = this.props.data.length;
    return (
      <div className="Carousel">
        <div className="Carousel-jiantou"
           onClick={() => {
            if (this.state.num !== 0) {
                const num = (this.state.num - 1) % lenghtNum;
                this.setState({ num})
            }
           }}
        ><img src={leftImg}  alt=""/></div>
        <div className="Carousel-center">
            <div className="Carousel-left"><img src={this.props.data[this.state.num]}  alt=""/></div>
            <div className="Carousel-center-heightLine"><img src={this.props.data[this.state.num+1]}  alt=""/></div>
            <div className="Carousel-right"><img src={this.props.data[this.state.num+2]}  alt=""/></div>
        </div>
        <div className="Carousel-jiantou"
           onClick={() => {
              const num = (this.state.num + 1) % lenghtNum;
              this.setState({ num })
           }}
        ><img src={rightImg}  alt=""/></div>
      </div>
    );
  }
}

export default Carousel;
