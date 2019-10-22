import React, { Component } from 'react'
import 'antd/dist/antd.css'
import '../../style/about.css'
import { Icon, Card, Row, Col } from 'antd';
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
                text: 'Store Wise Divison'
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
                        name: "js",
                        y: 70,
                    },
                    {
                        name: "c++",
                        y: 30,
                    }
                ]
            }]
        }

        return (
            <div>
                <center style={{ marginTop: "2%" }}>
                    <p class="quote">
                        <u>Believe in understanding the rules of the ‘game’
                    and use all my skills to play it better than anyone
                    else for the progress of oneself and the company
                    and never refrain from learning</u>
                    </p>
                </center>
                <Row gutter={16}>
                    <Col span={10}>
                        <Card bordered={true}>
                            <ReactHighcharts config={configStoreDivison} ref="chart"></ReactHighcharts>
                        </Card>
                    </Col>
                    <Col span={10}>
                        <Card bordered={true}>
                            <ReactHighcharts config={configStoreDivison} ref="chart"></ReactHighcharts>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default About