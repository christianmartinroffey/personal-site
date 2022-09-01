import React from 'react'
import profileCircle from "../../img/profile-circle.png"

function AboutMe() {
  return (
    <div className="justify-content-center" id="dark-page">
        <h1>AboutMe</h1>
        <div className='container d-flex'>
        <img src= {profileCircle} style={{height:200}}></img>
        <p>Some text about me</p>
        </div>
        </div>
  )
}

export default AboutMe