import React, { Component } from 'react'
import 'antd/dist/antd.css'
import '../../style2/education.css'

class About2 extends Component {
  render() {
    return (
      <div id="education">
        <h2 class="heading">Education</h2>
        <div class="education-block">
          <h3>University of Ottawa</h3>
          <span class="education-date">Sept 2016 - Sept 2017</span>
          <h4>Bachelor of Science in Computer Science</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
            </p>
        </div>

        <div class="education-block">
          <h3>University of Ottawa</h3>
          <span class="education-date">Sept 2016 - Sept 2017</span>
          <h4>Bachelor of Science in Computer Science</h4>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About2