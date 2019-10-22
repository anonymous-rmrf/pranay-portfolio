import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../../style/home.css'
// import Profile from '../profile/index'
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Icon } from 'antd';
class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/about">
                <div class="firstQuad">
                    <center>
                        <Icon style={{ fontSize: "20vh" }} type="pie-chart" />
                        <br></br>
                        <br></br>
                        <b>About</b>
                    </center>
                </div>
                </Link>
                <Link to="/profile">
                <div class="secondQuad">
                    <center>
                        <Icon style={{ fontSize: "20vh" }} type="user" />
                        <br></br>
                        <br></br>
                        <b>Profile</b>
                    </center>
                </div>
                </Link>
                <Link to="/works">
                <div class="thirdQuad">
                    <center>
                        <Icon style={{ fontSize: "20vh" }} type="appstore" />
                        <br></br>
                        <br></br>
                        <b>Works</b>
                    </center>
                </div>
                </Link>
                <Link to="/contact">
                <div class="fourthQuad">
                    <center>
                        <Icon style={{ fontSize: "20vh" }} type="mail" />
                        <br></br>
                        <br></br>
                        <b>Contact</b>
                    </center>
                </div>
                </Link>
            </div>
        );
    }
}

export default Home;
