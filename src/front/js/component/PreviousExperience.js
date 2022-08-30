import React, {useState} from 'react'
import "../../styles/customstyles.css/experience.css"
import LogoUscreen from "../../../front/img/logouscreen.png"
import SQSPLogo from "../../../front/img/SQSPLogo.png"
import logo4geeks from "../../img/logo4geeks.png"

function PreviousExperience() {

  const [modalState, setModalState] = useState(false);
  const [company, SetCompany] = useState();
  const fourGeeks = "4geeks";
 
  const onClickEvent4Geeks = (e) =>{
    setModalState(true);
    SetCompany(e);
  };
  
  const loadModalText4Geeks = () =>{
    company == "4geeks" ? (alert("this should only show for 4geeks")) :
    company == "SQSPENT" ? (alert("Enterprise") ):
    company == "Uscreen" ? (alert("uscreen")) :
    company == "SQSPCS" ? (alert("Success")) :
    company == "SQSPSup" ? (alert("support")) :
    company == "SQSPAdv" ? (alert("advisor")) : ("")
};
  

loadModalText4Geeks()

  console.log(modalState, company, "the state")

  return (
    <div id='dark-page' >
    <div className="container">
    <div className="row  justify-content-center">
      <div className="col-12 col-sm-8 col-lg-6">
        {/* <!-- Section Heading--> */}
        <div className="section_heading text-center wow fadeInUp inline-styling" data-wow-delay="0.2s">
          <h2 className='p-4'>Previous Experience</h2>
          <p className='pb-4'>Here you can find an overview of my experience and expertise.</p>
          <div className="line"></div>
        </div>
      </div>
    </div>
    <div className="row">
      {/* <!-- Single Advisor--> */}
      <div className=" experience-card col-12 col-sm-6 col-lg-3">
        <div className="single_advisor_profile wow fadeInUp inline-styling" data-wow-delay="0.4s">
          {/* <!-- Team Thumb--> */}
          <div className="advisor_thumb"> <img className="w-100 pt-2"  src={logo4geeks} alt=""></img>
          </div>
          {/* <!-- Team Details--> */}
          <div className="single_advisor_details_info">
            <h3 className="experience-text" >4Geeks Academy</h3>
            <p className="experience-text" >Full Stack Developer</p>
            <hr></hr>
            <h5 className="experience-text designation">Student, Full Stack Developer</h5>
            <a className="experience-links" id="4geeks" onClick={(e) => onClickEvent4Geeks(e.target.id)}>Find out more</a>
          </div>
        </div>
      </div>
      {/* <!-- Single Advisor--> */}
      <div className="  experience-card col-12 col-sm-6 col-lg-3">
        <div className="single_advisor_profile wow fadeInUp inline-styling" data-wow-delay="0.2s">
          {/* <!-- Team Thumb--> */}
          <div className="advisor_thumb"><img className="w-100 pt-2" src={LogoUscreen} alt=""></img>
          </div>
          {/* <!-- Team Details--> */}
          <div className="single_advisor_details_info">
            <h3 className="experience-text">Uscreen.tv</h3>
            <p className="experience-text">Video Monetization</p>
            <hr></hr>
            <h5 className="experience-text designation">Customer Success, Team Lead</h5>
            <a className="experience-links" id="Uscreen" onClick={(e) => onClickEvent4Geeks(e.target.id)}>Find out more</a>
          </div>
        </div>
      </div>
      {/* <!-- Single Advisor--> */}
      <div className=" experience-card col-12 col-sm-6 col-lg-3">
        <div className="single_advisor_profile wow fadeInUp inline-styling" data-wow-delay="0.3s" >
          {/* <!-- Team Thumb--> */}
          <div className="advisor_thumb"><img className="w-100 pt-2"  src={SQSPLogo} alt=""></img>
          </div>
          {/* <!-- Team Details--> */}
          <div className="single_advisor_details_info">
            <h3 className="experience-text">Squarespace Enterprise</h3>
            <p className="experience-text" >Enterprise and Premium SAAS</p>
            <hr></hr>
            <h5 className="experience-text designation">Senior Team Lead, Account Management</h5>
            <a className="experience-links" id="SQSPENT" onClick={(e) => onClickEvent4Geeks(e.target.id)}>Find out more</a>
          </div>
        </div>
      </div>
      {/* <!-- Single Advisor--> */}
      <div className="  experience-card col-12 col-sm-6 col-lg-3">
        <div className="single_advisor_profile wow fadeInUp inline-styling" data-wow-delay="0.4s">
          {/* <!-- Team Thumb--> */}
          <div className="advisor_thumb"> <img className="w-100 pt-2"  src={SQSPLogo} alt=""></img>
          </div>
          {/* <!-- Team Details--> */}
          <div className="single_advisor_details_info">
            <h3 className="experience-text" >Squarespace</h3>
            <p className="experience-text" >Website SAAS</p>
            <hr></hr>
            <h5 className="experience-text designation">Senior Team Lead, Customer Success</h5>
            <a className="experience-links" id="SQSPCS" onClick={(e) => onClickEvent4Geeks(e.target.id)} >Find out more</a>
          </div>
        </div>
      </div>
      {/* <!-- Single Advisor--> */}
      <div className="  experience-card col-12 col-sm-6 col-lg-3">
        <div className="single_advisor_profile wow fadeInUp inline-styling" data-wow-delay="0.4s">
          {/* <!-- Team Thumb--> */}
          <div className="advisor_thumb"> <img className="w-100 pt-2"  src={SQSPLogo} alt=""></img>
          </div>
          {/* <!-- Team Details--> */}
          <div className="single_advisor_details_info">
            <h3 className="experience-text" >Squarespace</h3>
            <p className="experience-text" >Website SAAS</p>
            <hr></hr>
            <h5 className="experience-text designation">Senior Team Lead, Customer Support</h5>
            <a className="experience-links" id="SQSPSup" onClick={(e) => onClickEvent4Geeks(e.target.id)}>Find out more</a>
          </div>
        </div>
      </div>
      {/* <!-- Single Advisor--> */}
      <div className="  experience-card col-12 col-sm-6 col-lg-3">
        <div className="single_advisor_profile wow fadeInUp inline-styling" data-wow-delay="0.4s">
          {/* <!-- Team Thumb--> */}
          <div className="advisor_thumb"> <img className="w-100 pt-2"  src={SQSPLogo} alt=""></img>
          </div>
          {/* <!-- Team Details--> */}
          <div className="single_advisor_details_info">
            <h3 className="experience-text" >Squarespace</h3>
            <p className="experience-text" >Website SAAS</p>
            <hr></hr>
            <h5 className="experience-text designation">Customer Care Advisor, Customer Support</h5>
            <p className="experience-text" >Key Skills</p>
            <ul>
              <li>Troubleshooting technical issues</li>
            </ul>
            <a className="experience-links" id="SQSPAdv" onClick={(e) => onClickEvent4Geeks(e.target.id)} >Find out more</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default PreviousExperience