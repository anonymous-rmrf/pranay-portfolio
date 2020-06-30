import React, { Component } from 'react'
import 'antd/dist/antd.css'
import '../style2/about2.css'

class About2 extends Component {
  render() {
    // var about = this.props.about.replace(/\n/g, '<br />');
    var about = this.props.about.split("\n")
    console.log(about)
    return (
        <div className="theme" id="about">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h2 class="heading">About Me</h2>
                </div>
                <div class="col-md-8">
                    <p>
                        {about[0]}
                    </p>
                    <br/>
                    <p>
                        {about[1]}
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default About2