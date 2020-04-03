import React, { Component } from 'react'
import 'antd/dist/antd.css'
import '../../style2/about2.css'

class About2 extends Component {
  render() {
    return (
        <div id="about">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h2 class="heading">About Me</h2>
                </div>
                <div class="col-md-8">
                    <p>
                        {this.props.about}    
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default About2