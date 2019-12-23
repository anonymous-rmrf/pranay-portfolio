import React, { Component } from 'react'
import 'antd/dist/antd.css'
import '../../style2/projects.css'
import image from '../../images/cover.jpg'

class About2 extends Component {
  // var projects = 
  render() {
    return (
        <div id="projects">
          <h2 class="heading">Projects</h2>
          <div className="container">
          <div className="project-block">
              <div className="project-image">
                <img src={image} />
                {/* <p>
                  Lorem ipsum dolor Sint
                </p> */}
              </div>
              <div className="project-info">
                <h3>
                  Project Name
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aperiam eligendi laborum expedita,
                  mollitia nulla aliquam ea porro necessitatibus reprehenderit officiis aut, amet, error rerum quisquam non delectus modi dolores!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aperiam eligendi laborum expedita,
                  mollitia nulla aliquam ea porro necessitatibus reprehenderit officiis aut, amet, error rerum quisquam non delectus modi dolores!
                </p>
              </div>
          </div>
            <div className="project-block">
                <div className="project-image">
                  <img src={image} />
                  <p>
                    Lorem ipsum dolor Sint
                  </p>
                </div>
                <div className="project-info">
                  <h3>
                    Project Name
                  </h3>
                  <p>
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aperiam eligendi laborum expedita, */}
                    mollitia nulla aliquam ea porro necessitatibus reprehenderit officiis aut, amet, error rerum quisquam non delectus modi dolores!
                  </p>
                </div>
            </div>
            <div className="project-block">
                <div className="project-image">
                  <img src={image} />
                  <p>
                    Lorem ipsum dolor Sint
                  </p>
                </div>
                <div className="project-info">
                  <h3>
                    Project Name
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aperiam eligendi laborum expedita,
                    mollitia nulla aliquam ea porro necessitatibus reprehenderit officiis aut, amet, error rerum quisquam non delectus modi dolores!
                  </p>
                </div>
            </div>
            <div className="project-block">
                <div className="project-image">
                  <img src={image} />
                  <p>
                    Lorem ipsum dolor Sint
                  </p>
                </div>
                <div className="project-info">
                  <h3>
                    Project Name
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aperiam eligendi laborum expedita,
                    mollitia nulla aliquam ea porro necessitatibus reprehenderit officiis aut, amet, error rerum quisquam non delectus modi dolores!
                  </p>
                </div>
            </div>
            <div style={{clear: "both"}} ></div>
          </div>
        </div>
    );
  }
}

export default About2