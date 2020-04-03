import React, { Component } from "react";
import { Timeline } from "antd";
import "antd/dist/antd.css";
import "../../style2/timeline.css";

class Timeline1 extends Component {
  render() {
    return (
      <div className="timeline-wrapper">
          {/* <center> */}
        <Timeline>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>
            Solve initial network problems 2015-09-01
          </Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>
            Network problems being solved 2015-09-01
          </Timeline.Item>
        </Timeline>
        {/* </center> */}
      </div>
    );
  }
}

export default Timeline1;
