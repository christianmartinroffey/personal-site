import React from "react";
import profileCircle from "../../img/profile-circle.png";
import "../../styles/customstyles.css/aboutMe.css";

function AboutMe() {
  return (
    <div className="justify-content-center  " id="dark-page">
      <div className="container d-flex pt-5">
        {/* <h1 className='ml2 '>Hi! I'm Christian.</h1>
        <h1 className='ml2 pb-1'>A Full Stack Software Engineer.</h1> */}
        <h1 className="home-title">
          <span className="">Hi! I'm Christian.</span>
          <span className="">A Full Stack Software Engineer.</span>
        </h1>
        <img
          className="mx-auto d-block img-fluid "
          src={profileCircle}
          style={{ height: 300 }}
        ></img>
      </div>
      <h5>What you'll find in this portfolio site:</h5>
      <div className="container d-flex center-all">
        <ul>
          <li>
            A showcase of my skills and expertise, from front to back-end
            languages
          </li>
          <li>Details on my software engineering experience</li>
          <li>An overview of my previous experience</li>
        </ul>
        <div className="vertical-line"></div>
        <p className="pl-3">
          I've spent over 7 years in software SAAS companies learning and
          understanding customers' needs on various levels. technical, mission,
          business etc.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
