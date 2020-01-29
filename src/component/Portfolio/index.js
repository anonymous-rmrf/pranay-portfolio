import React, { Component } from 'react'
import 'antd/dist/antd.css'
import axios from 'axios'
import Navbar from './Header'
import Lead from './Lead'
import About from './About'
import Skills from './Skills'
import Footer from './Footer'
import Projects from './Projects'
import Education from './Education'
import Experience from './Experience'
import allData from '../../resumeData/resume.json'
class Portfolio extends Component {

  constructor(props)
  {
    super(props)
    this.state = {
      load: false,
      leadData: null,
      about: [],
      experience: [],
      education: [],
      projects: [],
      skills: []

    }
  }

  componentDidMount(){
    this.setState({
      about: allData.about,
      experience: allData.experience,
      education: allData.education,
      skills: allData.skills,
      projects: allData.projects,
      load: true
    }, () => {
      console.log(this.state, "stateettet")
    })
  }

  render() {
    if(this.state.load){
      return (
        <React.Fragment>
          <Navbar />
          <Lead/>
          <About about={this.state.about} />
          <Experience experience={this.state.experience} />
          <Education education={this.state.education} />
          <Projects projects={this.state.projects} />
          <Skills skills={this.state.skills} />
          <Footer/>
        </React.Fragment>
      );
    } else {
      return (<h1>kaam chalu h</h1>)
    }
    
  }
}

export default Portfolio