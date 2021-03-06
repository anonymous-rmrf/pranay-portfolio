import React, { Component } from 'react'
import 'antd/dist/antd.css'
import '../style2/cover.css'

class Lead extends Component {
  render() {
    return (
      <div id="lead">
        <div id="lead-content">
          <h1>{this.props.name}</h1>
          <h2>{this.props.position}</h2>
          <a href="/pdf/pranayresume.pdf" class="btn-rounded-white" target="_blank" download>Download Resume</a>
        </div>

        <div id="lead-overlay"></div>

        {/* <div id="lead-down">
          <span>
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </span>
        </div> */}
      </div>

    );
  }
}

export default Lead