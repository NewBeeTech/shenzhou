import './style.css';
import React, { Component } from 'react';

class Recruit extends Component {
  showRecruitList(data) {
    const views = [];
    if(data) {
      data.map((item, key) => {
        views.push(
          <div key={key}>
              <div className="Recruit-top">{item.title}</div>
              <div className="Recruit-body">
                <div className="Recruit-body-left">
                    <div className="Recruit-body-title">岗位职责</div>
                    <pre className="Recruit-body-content">{item.responsibility}</pre>
                </div>

                <div className="Recruit-body-right">
                  <div className="Recruit-body-title">岗位要求</div>
                  <pre className="Recruit-body-content">{item.requirement}</pre>
                </div>
              </div>
          </div>
        )
      })
    }
    return views;
  }
  render() {
    return (
      <div className="Recruit-card">
        <div className="Recruit-title">
          <span className="Title-text">
            公司长期招聘以下人员
          </span>
        </div>
        {this.showRecruitList(this.props.data)}
      </div>
    );
  }
}

export default Recruit;
