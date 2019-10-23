import React,{Component} from 'react'
import 'antd/dist/antd.css'
import { Icon, Card, Row, Col } from 'antd';
const ReactHighcharts = require('react-highcharts');

class Language extends Component
{
    
    render(){
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
                        name:"Java",
                        y:10
                    },
                    {
                        name:"Python",
                        y:10
                    },
                    {
                        name:"Dart",
                        y:10
                    },
                    {
                        name:"C",
                        y:10
                    },
                    {
                        name:"C++",
                        y:10
                    },
                    {
                        name:"MySql",
                        y:10
                    },
                    
                ]
            }]
        }
        return(
            <ReactHighcharts config={configStoreDivison} ref="chart"></ReactHighcharts>
        )
    }
}
export default Language