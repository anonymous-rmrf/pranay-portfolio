import React, { Component } from 'react'
import 'antd/dist/antd.css'
import '../../style/about.css'
import { Icon, Card, Row, Col } from 'antd';
import Language from './language'
import Framework from './framework'
const ReactHighcharts = require('react-highcharts');

class About extends Component {
    render() {

        let configStoreDivison = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Languages'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Skill Set',
                colorByPoint: true,
                data: [
                    {
                        name: "Js",
                        y: 20,
                    },
                    {
                        name: "HTML/CSS",
                        y: 15,
                    },
                    {
                        name: "PHP",
                        y: 5,
                    },
                    {
                        name: "Java",
                        y: 10
                    },
                    {
                        name: "Python",
                        y: 10
                    },
                    {
                        name: "Dart",
                        y: 10
                    },
                    {
                        name: "C",
                        y: 10
                    },
                    {
                        name: "C++",
                        y: 10
                    },
                    {
                        name: "MySql",
                        y: 10
                    },

                ]
            }]
        }

        return (
            <div >
                
                <center style={{ marginTop: "2%" }}>
                    <h2><u>ABOUT ME</u></h2>
                </center>
                <div className="quoteDiv">
                    {/* <center > */}
                    <br></br>
                        <p class="quote">
                        <i class="fa fa-quote-left" aria-hidden="true"></i> &nbsp;
                            <u>Believe in understanding the rules of the ‘game’
                        and use all my skills to play it better than anyone
                        else for the progress of oneself and the company
                    and never refrain from learning</u> &nbsp;
                    <i class="fa fa-quote-right" aria-hidden="true"></i>
                        </p>
                    {/* </center> */}
                </div>
                <div className="about">
                    I am a full stack web developer and have experience in open source.
                    I am a <b>MEAN</b> as well as <b>MERN</b> stack developer.
                    I can write custom css and can bring a spark in the page which is difficult
                    to achieve using different libraries. Due to my experience in open source 
                    I can start work from scratch as well as can make development in others code.
                </div>
                <div  className="subTopics">
                <li>
                    Some of the computer languages and frameworks that I can handle with
                </li>
                </div>
                <div className="language">
                    <Language></Language>
                </div>
                <div className="framework">
                    <Framework />
                </div>
                <br></br>
                <div className="subTopics2"> 
                <br></br><br></br>
                <li >
                    Other than these I have experience in Git, Amazon Web Service, Google Cloud Platform. Currently Working on AWS inorder to become AWS solution architect 
                </li>
                </div>
                
                
                
                {/* <Row gutter={16}>
                    <Col span={10}>
                        <Card bordered={true}> */}

                {/* </Card>
                    </Col>
                    <Col span={10}>
                        <Card bordered={true}>
                            <ReactHighcharts config={configStoreDivison} ref="chart"></ReactHighcharts>
                        </Card>
                    </Col>
                </Row> */}
            </div>
        )
    }
}

export default About