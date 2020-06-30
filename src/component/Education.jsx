import React, { Component } from 'react'
import 'antd/dist/antd.css'
import '../style2/education.css'

class Education extends Component {
  render() {

    var education = this.props.education.map(item => {
      return (
        <div class="education-block">
          <h3>{item.college}</h3>
          <span class="education-date">{item.yearOfPassing}</span>
          <h4>{item.qualification}</h4>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
            </p> */}
        </div>
      )
    })

    return (
      <div className="theme" id="education">
        <h2 className="heading">Education</h2>

        {education}
        
      </div>
    );
  }
}

export default Education