import React, { Component } from 'react'
import 'antd/dist/antd.css'
import Lead from './Lead'
import About from './About'
import Skills from './Skills'
import Footer from './Footer'
import Projects from './Projects'
import Education from './Education'
import Experience from './Experience'

class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <Lead/>
        <About/>
        {/* <Experience/> */}
        <Education/>
        <Projects/>
        <Skills/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Portfolio