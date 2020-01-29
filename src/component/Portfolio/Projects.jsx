import React, { Component } from 'react'
import 'antd/dist/antd.css'
import '../../style2/projects.css'
import image from '../../images/cover.jpg'
import { Card } from 'antd'

class About2 extends Component {
  componentDidMount() {
    console.log(this.props, "propopoppo")
  }
  render() {

    var PROJECTS = this.props.projects.map(item => {
      return (
        <div className="card card-default project-block1" >
        <div class="card-body">
          <p class="lead">{item.name}</p>
          <p>{item.description}</p>
          <a href={item.link}>View Project</a>
        </div>
      </div>
      )
    })
    return (
      <div id="projects" className="background-alt" >
        <h2 className="heading">Projects</h2>
        <div className="container">
            {PROJECTS}
              {/* <div className="card card-default project-block1" >
                <div class="card-body">
                  <p class="lead">Burning the candle.</p>
                  <p>A stitch in time saves nine.  All good things come to those who wait.  Too  many cooks spoil the broth.  I have seen the future, and it works. All good things come to those who wait.  Too  many cooks spoil the broth.</p>
                  <a href="#">GitHub</a>
                </div>
              </div> */}
        </div>
      </div>
    );
  }
}

export default About2