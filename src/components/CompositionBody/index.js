import './style.css';
import React, { Component } from 'react';

class CompositionBody extends Component {
  render() {
    return (
      <div className="CompositionBody">
        <div><img src={this.props.leftImg} alt="" /></div>
        <div className="compositionBody-right">
            <div className="compositionBody-right-title"><div />{this.props.title}</div>
            <div className="compositionBody-right-content">{this.props.content}</div>
        </div>
      </div>
    );
  }
}

export default CompositionBody;
