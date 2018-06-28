import './style.css';
import React, { Component } from 'react';

class CommonTitle extends Component {
  render() {
    return (
      <div className="CommonTitle">
          <div className="CommonTitle-title">{this.props.title}</div>
          <div className="CommonTitle-border"/>
      </div>
    );
  }
}

export default CommonTitle;
