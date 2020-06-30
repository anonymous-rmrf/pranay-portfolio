import React, { Component } from 'react'
import 'antd/dist/antd.css'
import '../style2/skills.css'

class Skills extends Component {
  render() {

    var Skills = this.props.skills.map((item) => {
    return <li>{item}</li>
    })

    return (
      <div className="theme-support" id="skills">
        <h2 class="heading">Skills</h2>
        <ul>
          {Skills}
        </ul>
      </div>
    );
  }
}

export default Skills