import React, { Component } from "react";
import { Timeline, Card } from "antd";
import "antd/dist/antd.css";
import "../../style2/experiencs.css";
import "../../style2/timeline.css";

class Experience extends Component {
  render() {
    var experienceLaptop = this.props.experience.map((item, k) => {
      return (
        <div class="vtimeline-point">
          <div class="vtimeline-icon">
            <i class="fa fa-map-marker"></i>
          </div>
          <div class="vtimeline-block">
            <span class="vtimeline-date">{item.timeline}</span>
            <div class="vtimeline-content">
              <h3>{item.name}</h3>
              <h4>{item.role}</h4>
              <ul>
                {item.about.map(data => {
                  return <li>{data}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      );
    });

    var experienceMobile = this.props.experience.map((item, k) => {
      return (<Timeline.Item>
        <div class="vtimeline-block">
          <div class="vtimeline-content-mobile">
            <h3>{item.name}</h3>
            <span class="vtimeline-date-mobile">{item.timeline}</span>
            {/* <div> */}
            <h4>{item.role}</h4>
            <ul>
              {item.about.map(data => {
                return <li>{data}</li>;
              })}
            </ul>
            {/* </div> */}
          </div>
        </div>
      </Timeline.Item>)
    });

    return (
      <div id="experience" class="background-alt">
        <h2 class="heading">Experience</h2>
        <div id="experience-timeline">{experienceLaptop}</div>
        <div className="timeline-wrapper">
          <Timeline>{experienceMobile}</Timeline>
        </div>
      </div>
    );
  }
}

export default Experience;
