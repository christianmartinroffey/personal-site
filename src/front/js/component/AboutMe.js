import React from "react";
import profileCircle from "../../img/profile-circle.png";
import "../../styles/customstyles.css/aboutMe.css";
import LanguageIcons from "./languageIcons";
import PreviousExperience from "./PreviousExperience";
import IntroSection from "./introSection";

function AboutMe() {

// const linkToNextSection = () =>{
//https://3000-christianma-personalsit-930c68xkbqz.ws-eu63.gitpod.io/#yourAnchorTag">Your link text</Link> */}
// console.log("button clicked")
// };

  return (
    <div className="justify-content-center pt-3 " >
      <div className="container center-all d-flex pt-5 pb-5">
        {/* <h1 className='ml2 '>Hi! I'm Christian.</h1>
        <h1 className='ml2 pb-1'>A Full Stack Software Engineer.</h1> */}
        <div>
        <h1 className="home-title">
          <span className="">Hi! I'm Christian.</span>
          <span className="">A Backend Software Engineer.</span>
        </h1>
        </div>
       <div>
        <img
          className="mx-auto d-block img-fluid diamond-animation "
          src={profileCircle}
          
        ></img>
      </div>
      </div>
      <LanguageIcons/>
      <a className="no-decoration" href="https://cmr-personal-site.onrender.com/#portfolio-section">
      <div className="container arrows-container">
          <div className="arrow" > 
            <span></span>
            <span></span>
            <span></span>
            <div id="portfolio-section"></div>
          </div>
        </div>
        </a>
    <IntroSection/>
    </div>
  );
}

export default AboutMe;
