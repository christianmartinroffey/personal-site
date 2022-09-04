import React from 'react'
import profileCircle from "../../img/profile-circle.png"
import "../../styles/customstyles.css/aboutMe.css";

function AboutMe() {
  return (
    <div className="justify-content-center" id="dark-page">
        <h1 className='ml2'>Welcome to my portfolio</h1>
        <div className='container d-flex'>
        <img src= {profileCircle} style={{height:250}}></img>
        <p>I've spent over 7 years in software SAAS companies learning and understanding customers' needs on various levels. 
          technical, mission, business etc. 
        </p>
        </div>
        </div>
  )
}

export default AboutMe