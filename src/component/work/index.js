import React, { Component } from 'react'
import 'antd/dist/antd.css'
import '../../style/work.css'
import { Icon } from 'antd';
import axios from 'axios';
import { Card, Col, Row } from 'antd';
import Axios from 'axios';
class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
          list: [],
        };
      }
    componentDidMount() {
        axios.get('./works.json')
        .then( function(response){
            console.log(response);
            this.setState({
                list:response.data.works,
                response:true
            })

        }.bind(this))
      }
      handleWorks = () => {
        console.log(this.state.data)
        return this.state.list.map(work =>

            <p>
            <Card title={work.Title}>
                {work.Description}
                <br></br> <br></br>
                Languages/Dependencies : {work.Languages_Dependencies} 
                <hr></hr>
                {work.Duration}
            </Card>
            </p>
            

        )
    }
    render() {
        console.log(this.state)
        return (
            <div class="Work-Body">
                <center style={{ margin: "1%" }}>
                    <h2><u>PROJECTS</u></h2>
                </center>
                <div className="Work-cards">
                   {this.handleWorks()}                   
                </div>

            </div>
        )
    }
}

export default Work