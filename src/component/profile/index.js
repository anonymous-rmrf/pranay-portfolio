import React, { Component } from 'react';
import 'antd/dist/antd.css';
import profile from '../../images/profile.jpg'
import '../../style/profile.css'
import coverImage from '../../images/cover.jpg'
import { Icon } from 'antd';
import Education from './education'
class Profile extends Component  {
  render() {
    return (
      <div>
          <div className="coverImage">
          </div>
          <div className="profileImage">
            <img src={profile}></img>
            <div className="profileName">
              <b>Sandeep Patel</b>
              <br></br>
              
              <div style={{fontSize:"2vh"}}>
              3rd Year BTech student at IIIT Bhubaneswar
              <br></br>
              <a href="https://www.linkedin.com/in/sandeep-patel-80709715b/" target="_blank" >  <Icon type="linkedin" /></a> &nbsp; &nbsp;
              <a href="https://twitter.com/anshudhn11" target="_blank"><Icon type="twitter" /></a> &nbsp; &nbsp; 
              <a href="https://github.com/suicide11" target="_blank"><Icon type="github" /></a> &nbsp; &nbsp; 
              <Icon type="global" />Bhubaneswar</div>
            </div>
          </div>
          <div className="education">
            <Education/>
          </div>
      </div>
    );
  }
}

export default Profile;
