import './style.css';
import React, { Component } from 'react';

class Recruit extends Component {
  render() {
    return (
      <div className="Recruit-card">
        <div className="Recruit-top">
          {this.props.position}1123123
        </div>
        <div className="Recruit-body">
          <div className="Recruit-body-left">
            <div className="Recruit-body-title">
              岗位职责
            </div>
            <div className="Recruit-body-content">
              岗位职责
            </div>
          </div>
          <div className="Recruit-body-right">
            <div className="Recruit-body-title">
              岗位要求
            </div>
            <div className="Recruit-body-content">
              岗位要求
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recruit;
