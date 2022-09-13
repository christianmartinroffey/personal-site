import React from "react";
import profileCircle from "../../img/profile-circle.png";
import "../../styles/customstyles.css/aboutMe.css";
import LanguageIcons from "./languageIcons";
import PreviousExperience from "./PreviousExperience";

function AboutMe() {

// const linkToNextSection = () =>{
//https://3000-christianma-personalsit-930c68xkbqz.ws-eu63.gitpod.io/#yourAnchorTag">Your link text</Link> */}
// console.log("button clicked")
// };

  return (
    <div className="justify-content-center pt-5 " id="dark-page">
      <div className="container center-all d-flex pt-5 pb-5">
        {/* <h1 className='ml2 '>Hi! I'm Christian.</h1>
        <h1 className='ml2 pb-1'>A Full Stack Software Engineer.</h1> */}
        <div className="col-6">
        <h1 className="home-title">
          <span className="">Hi! I'm Christian.</span>
          <span className="">A Full Stack Software Engineer.</span>
        </h1>
        </div>
        <div className="col-6">
        <img
          className="mx-auto d-block img-fluid diamond-animation "
          src={profileCircle}
          style={{ height: 300 }}
        ></img>
        </div>
      </div>
      <LanguageIcons/>
      <a className="no-decoration" href="https://3000-christianma-personalsit-930c68xkbqz.ws-eu64.gitpod.io/#portfolio-section">
      <div className="container arrows-container">
          <div className="arrow" > 
            <span></span>
            <span></span>
            <span></span>
            <div id="portfolio-section"></div>
          </div>
        </div>
        </a>
       
      <h2 className="pb-4 display-4" id="portfolio-section">A brief intro:</h2>
      <div className="container d-flex center-all">
        <ul>
          <li className="display-6">Professional</li>
          <li className="pt-4 pb-4">
          - 7+ years web-based SAAS experience, across Enterprise & SMB. 💻 
          </li>
          <li className=" pb-4"> 
          - Coding mentor for 4Geeks 🚀 
          </li>
          <li className=" pb-4"> 
          - Technical Support, Account Management, Department & Global Leadership. 👨‍💻
          </li>
          <li className=" pb-4"> 
          - Adept at identifying improvement opportunities and increasing operational efficiency. 💡
          </li>
        </ul>
        <div className="vertical-line"></div>
        <ul>
        <li className="display-6 pb-4">Personal</li>
        <li className="pl-3 pb-4">
          - I'm a father to baby Noah. 👶
        </li>
        <li className="pl-3 pb-4">
          - CrossFit athlete, coach (in my spare time) & gym afficionado. 🏋️‍♂️
        </li>
        <li className="pl-3 pb-4">
          - Live in paradise 🌴 Mallorca, Spain 🌴 
        </li>
        <li className="pl-3 pb-4">
          - Love a challenge and enjoying the Full Stack Developer journey. 🖥️ 
        </li>  
        <li className="pl-3">
          - Fluent in 3 languages, English 🇬🇧 & Spanish 🇪🇸 native, Italian 🇮🇹 professional proficiency.
        </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
