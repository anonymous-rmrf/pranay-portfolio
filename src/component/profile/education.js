import React from 'react'
import 'antd/dist/antd.css';
import '../../style/profile.css'
import { Icon } from 'antd';
function Education() {
    return (
        <div>
            <div className="secondaryEducation">
                <center style={{top:0}}>
                    <h2>Secondary Education</h2>
                </center>
                <h3>
                    <ul>
                        School Name : De Nobiul School Mugma
                    </ul>
                    <ul>
                        Year of passing : 2014
                    </ul>
                    <ul>
                        Board Name : ICSE
                    </ul>
                    <ul>
                        Marks Scored : 88%;
                    </ul>
                    <ul>
                        Address :  Mugma, Dhanbad, Jharkhand
                    </ul>
                </h3>
            </div>
            <div className="seniorSecondaryEducation">
                <center style={{ top:0 }}><h2>Senior Secondary School</h2></center>
                <h3>
                    <ul>
                        School Name : Disha Delphi Global Senior Secondary School
                    </ul>
                    <ul>
                        Year of passing : 2016
                    </ul>
                    <ul>
                        Board Name : RBSE
                    </ul>
                    <ul>
                        Marks Scored : 76%;
                    </ul>
                    <ul>
                        Address : Kota, Rajasthan
                    </ul>
                </h3>
            </div>
            <div className="graduation">
                <center style={{top:0}}><h2>Graduation</h2></center>
                <h3>
                    <ul>College Name : International Institute of Information Technology</ul>
                    <ul>Branch : Computer Science and Engineering</ul>
                    <ul>Current Year : 3rd(5th Semester)</ul>
                    <ul>Batch : 2017-2021</ul>
                    <ul>Current CGPA : 7.4</ul>
                </h3>
            </div>
        </div>
    )
}
export default Education