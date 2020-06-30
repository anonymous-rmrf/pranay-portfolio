import React, { Component } from "react";
import "antd/dist/antd.css";
import {
  FacebookFilled,
  LinkedinFilled,
  MediumOutlined,
  GithubFilled,
} from "@ant-design/icons";
import "../style2/footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 copyright">
              <p>Developed by PRANAY AGARWAL</p>
            </div>
            {/* <div class="col-sm-2 top">
              <span id="to-top">
                <i class="fa fa-chevron-up" aria-hidden="true"></i>
              </span>
            </div> */}
            <div class="col-sm-6 social">
              <ul>
                <li>
                  <a href="https://github.com/pranayag15" target="_blank">
                    <GithubFilled />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/pranayag15/"
                    target="_blank"
                  >
                    <LinkedinFilled />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/pranayag15" target="_blank">
                    <FacebookFilled />
                  </a>
                </li>
                <li>
                  <a href="https://www.medium.com/@pranayag15" target="_blank">
                    <MediumOutlined />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
