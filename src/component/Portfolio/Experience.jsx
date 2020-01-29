import React, { Component } from 'react'
import 'antd/dist/antd.css'
import '../../style2/experiencs.css'

class Experience extends Component {

  render() {

    var experience = this.props.experience.map((item, k) => {
      return (
        <div class="vtimeline-point" >
          <div class="vtimeline-icon">
            <i class="fa fa-map-marker"></i>
          </div>
          <div class="vtimeline-block" >
            <span class="vtimeline-date" >
              {item.timeline}
            </span>
            <div class="vtimeline-content" >
              <h3>{item.name}</h3>
              <h4>{item.role}</h4>
              <ul>
                {item.about.map((data) => {
                  return (
                    <li>{data}</li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div id="experience" class="background-alt">
        <h2 class="heading">Experience</h2>
        <div id="experience-timeline">

          {experience}

        </div>
      </div>
    );
  }
}

export default Experience