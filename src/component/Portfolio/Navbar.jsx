import React, { Component } from "react";
import { Space } from "antd";
import "antd/dist/antd.css";
import "../../style2/navbar.css";

class Navbar extends Component {
  render() {
    return (
      <section className="navigation sticky-top">
        <div className="container">
          <div className="navbar-wrapper">
              <center>
            <ul className="navbar-ul" >
              <Space size={100} >
                <li >
                  <a href="#about">About</a>
                </li>
                <li >
                  <a href="#experience">Experience</a>
                </li>
                <li >
                  <a href="#education">Education</a>
                </li>
                <li >
                  <a href="#projects">Projects</a>
                </li>
                <li >
                  <a href="#skills">Skills</a>
                </li>
                <li >
                  <a href="#contact">Contact</a>
                </li>
              </Space>
            </ul>
            </center>
          </div>
        </div>
      </section>
    );
  }
}

export default Navbar;
