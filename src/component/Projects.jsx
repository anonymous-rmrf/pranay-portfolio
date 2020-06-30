import React, { Component } from "react";
import "antd/dist/antd.css";
import "../style2/projects.css";

class About2 extends Component {
  componentDidMount() {
    console.log(this.props, "propopoppo");
  }
  render() {
    var PROJECTS = this.props.projects.map(item => {
      return (
        // card-col card project-block1
        <div className="col-sm-3 ">
          <div class="card-body card project-card">
            <h3 class="lead">{item.name}</h3>
            <p>{item.description}</p>
            <a href={item.link}>View Project</a>
          </div>
        </div>
      );
    });
    return (
      <div id="projects" className="theme">
        <h2 className="heading">Projects</h2>
        <div className="container">
          <div className="row ">{PROJECTS}</div>
        </div>
      </div>
    );
  }
}

export default About2;
