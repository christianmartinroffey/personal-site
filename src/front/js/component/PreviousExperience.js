import React from 'react'
import "../../styles/customstyles.css/experience.css"
import LogoUscreen from "../../../front/img/logouscreen.png"
import SQSPLogo from "../../../front/img/SQSPLogo.png"

function PreviousExperience() {


  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-sm-8 col-lg-6">
        {/* <!-- Section Heading--> */}
        <div className="section_heading text-center wow fadeInUp inline-styling" data-wow-delay="0.2s">
          <h3>Previous Experience</h3>
          <p>Here you can find a little more about my experience and expertise.</p>
          <div className="line"></div>
        </div>
      </div>
    </div>
    <div className="row">
      {/* <!-- Single Advisor--> */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="single_advisor_profile wow fadeInUp inline-styling" data-wow-delay="0.2s">
          {/* <!-- Team Thumb--> */}
          <div className="advisor_thumb"><img className="w-100" src={LogoUscreen} alt=""></img>
            {/* <!-- Social Info--> */}
            <div className="social-info"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div>
          </div>
          {/* <!-- Team Details--> */}
          <div className="single_advisor_details_info">
            <h6>Uscreen.tv</h6>
            <p className="designation">Customer Success Team Lead</p>
            <a>Find out more</a>
          </div>
        </div>
      </div>
      {/* <!-- Single Advisor--> */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="single_advisor_profile wow fadeInUp inline-styling" data-wow-delay="0.3s" >
          {/* <!-- Team Thumb--> */}
          <div className="advisor_thumb"><img className="w-100"  src={SQSPLogo} alt=""></img>
            {/* <!-- Social Info--> */}
            <div className="social-info"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div>
          </div>
          {/* <!-- Team Details--> */}
          <div className="single_advisor_details_info">
            <h6>Squarespace Enterprise</h6>
            <p className="designation">Senior Team Lead - Account Management</p>
            <a>Find out more</a>
          </div>
        </div>
      </div>
      {/* <!-- Single Advisor--> */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="single_advisor_profile wow fadeInUp inline-styling" data-wow-delay="0.4s">
          {/* <!-- Team Thumb--> */}
          <div className="advisor_thumb"> <img className="w-100"  src={SQSPLogo} alt=""></img>
            {/* <!-- Social Info--> */}
            <div className="social-info"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div>
          </div>
          {/* <!-- Team Details--> */}
          <div className="single_advisor_details_info">
            <h6>Squarespace</h6>
            <p className="designation">Senior Team Lead - Customer Success</p>
            <a>Find out more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PreviousExperience