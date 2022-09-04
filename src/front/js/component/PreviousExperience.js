import React, { useState } from "react";
import "../../styles/customstyles.css/experience.css";
import LogoUscreen from "../../../front/img/logouscreen.png";
import SQSPLogo from "../../../front/img/SQSPLogo.png";
import logo4geeks from "../../img/logo4geeks.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function PreviousExperience() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [modalState, setModalState] = useState(false);

  const roleDetails = [
    {
      id: 0,
      company: "4Geeks",
      overview: "overview text",
      specifics: "more specifics on that specific role",
    },
    {
      id: 1,
      company: "Uscreen",
      overview: "overview text",
      specifics: "more specifics on that specific role",
    },
    {
      id: 2,
      company: "SquareSpace Enterprise",
      overview: "overview text",
      specifics: "more specifics on that specific role",
    },
    {
      id: 3,
      company: "SquareSpace Customer Success",
      overview: "overview text",
      specifics: "more specifics on that specific role",
    },
    {
      id: 5,
      company: "SquareSpace Customer Operations Leadership",
      overview: "overview text",
      specifics: "more specifics on that specific role",
    },
    {
      id: 6,
      company: "SquareSpace Customer Operations Advisor",
      overview: "overview text",
      specifics: "more specifics on that specific role",
    },
  ];
  const [company, setCompany] = useState();

  const onClickEvent4Geeks = (e) => {
    // setModalState(true);
    setShow(true);
    setCompany(e);

    // setModal(true);
  };

  // loadModalText4Geeks()
  // console.log(modalState,"modal", company, "company")

  {
    /* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */
  }

  return (
    <div id="dark-page">
      {roleDetails.map((role) => {
        return (
          <Modal show={show} onHide={handleClose}>
            {/* section for 4geeks */}
            {company == "4geeks" ? (
              <Modal.Body>
                <h1>Full Stack Engineer Bootcamp</h1>
                <a href="https://4geeks.com/">4Geeks</a>
                <h3>Part-time Full Stack Engineer bootcamp.</h3>
                <h4>
                  Final project included building out the sign up, login and
                  password recovery process using a variety of different tools
                  and languages across front and back-end language. This project
                  also included implementing two APIs, YouTube search as well as
                  fetching a random quote.{" "}
                </h4>
                <ul>
                  <h4>Included:</h4>
                  <li>Frontend: Javascript, React, HTML, CSS, Bootstrap</li>
                  <li>Backend: Python, Flask, API, SQL</li>
                  <li>Test Driven Development: Jest</li>
                  <li>Git: Terminal, Github, Gitpod, Heroku </li>
                </ul>
                <ul>
                  <h3>Projects</h3>
                  <li>Chore Manager</li>
                  <li>StarWars API blog</li>
                  <li>Todo List with React</li>
                </ul>
              </Modal.Body>
            ) : company == "Uscreen" ? (
              <Modal.Body>
                <h1>Lead Customer Success Organization</h1>
                <a href="https://www.uscreen.tv/">Uscreen.tv</a>
                <p>
                  Set the retention & upsell strategy for low, mid and
                  Enterprise-level companies.
                </p>
                <ul>
                  Included:
                  <li>Establishing SLA, internal processes</li>
                  <li>Ensure </li>
                  <li>Failed/Delinquent churn recovery</li>
                  <li>Expansion/Upsell opportunities</li>
                  <li>Quarterly business reviews</li>
                  <li>Customer Lifecycle</li>
                </ul>
                <ul>
                  <h3>Achievements</h3>
                  <li>XXXXXX</li>
                  <li>XXXXXXX</li>
                  <li>XXXXXX</li>
                </ul>
              </Modal.Body>
            ) : company == "SQSPENT" ? (
              <Modal.Body>
                <h1>Account Management Lead: Retention, Onboarding & Conversion</h1>
                <a href="https://www.squarespace.com/enterprise"></a>
                <p>
                  Set the retention strategy for Enterprise-level companies from
                  the ground up.
                </p>
                <ul>
                  Included:
                  <li>Quarterly business reviews</li>
                  <li>Customer Lifecycle</li>
                </ul>
                <ul>
                  <h3>Achievements</h3>
                  <li><a href="https://getirelandonline.squarespace.com/">Get Ireland Online</a></li>
                  <li>Launch of paid onboarding consultations</li>
                  <li>XXXXXX</li>
                </ul>
              </Modal.Body>
            ) : company == "SQSPCS" ? (
              <Modal.Body>
                <h1>Account Management Lead: Retention, Onboarding & Sales</h1>
                <a href="https://www.squarespace.com/"></a>
                <p>
                  Lead the Dublin-based Customer Success team, focusing on 3 main areas to ensure platform growth.
                </p>
                <ul>
                  Included:
                  <li>Prioritized Live Chat routing for trialers to increase conversion with more than 50% success rate. Baseline of 21%.</li>
                  <li>Identify and implement proactive reach out for top-selling commerce merchants (by GMV) to ensure retention.</li>
                  <li>Hired and grew the Success team globally, across 3 locations from 5 to 16.</li>
                </ul>
                <ul>
                  <h3>Achievements</h3>
                  <li><a href="https://getirelandonline.squarespace.com/">Get Ireland Online</a></li>
                  <li>Launch of paid onboarding consultations</li>
                  <li>XXXXXX</li>
                </ul>
              </Modal.Body>
            ) 
            : company == "SQSPSup" ? (
              <Modal.Body>
                <h1>Senior Team Lead: Customer Support</h1>
                <a href="https://www.squarespace.com/"></a>
                <p>
                  Description.
                </p>
                <ul>
                  Included:
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <ul>
                  <h3>Achievements</h3>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </Modal.Body>
            )   : company == "SQSPAdv" ? (
              <Modal.Body>
                <h1>Senior Team Lead: Customer Support</h1>
                <a href="https://www.squarespace.com/"></a>
                <p>
                  Description.
                </p>
                <ul>
                  Included:
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <ul>
                  <h3>Achievements</h3>
                  <li>Winner of the first Support organization recognition programme for productivity and quality performance by senior Leadership: Spotlight</li>
                  <li></li>
                  <li></li>
                </ul>
              </Modal.Body>
            ) :(
              <Modal.Body>Company does not match</Modal.Body>
            )}
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        );
      })}
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-12 col-sm-8 col-lg-6">
            {/* <!-- Section Heading--> */}
            <div
              className="section_heading text-center fadeInUp inline-styling"
              data-wow-delay="0.2s"
            >
              <h2 className="p-4">Previous Experience</h2>
              <p className="pb-4">
                Here you can find an overview of my experience and expertise.
              </p>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <!-- Single Advisor--> */}
          <div className=" experience-card experience-card-background col-12 col-sm-6 col-lg-3">
            <div
              className="single_advisor_profile wow fadeInUp inline-styling"
              data-wow-delay="0.4s"
            >
              {/* <!-- Team Thumb--> */}
              <div className="advisor_thumb">
                {" "}
                <img className="w-100 pt-2" src={logo4geeks} alt=""></img>
              </div>
              {/* <!-- Team Details--> */}
              <div className="single_advisor_details_info">
                <h3 className="experience-text">4Geeks Academy</h3>
                <p className="experience-text">Full Stack Developer</p>
                <hr></hr>
                <h5 className="experience-text designation">
                  Student, Full Stack Developer
                </h5>
                <a
                  className="experience-links"
                  id="4geeks"
                  onClick={(e) => onClickEvent4Geeks(e.target.id)}
                >
                  Click to find out more
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Single Advisor--> */}
          <div className="  experience-card  experience-card-background col-12 col-sm-6 col-lg-3">
            <div
              className="single_advisor_profile wow fadeInUp inline-styling"
              data-wow-delay="0.2s"
            >
              {/* <!-- Team Thumb--> */}
              <div className="advisor_thumb">
                <img className="w-100 pt-2" src={LogoUscreen} alt=""></img>
              </div>
              {/* <!-- Team Details--> */}
              <div className="single_advisor_details_info">
                <h3 className="experience-text">Uscreen.tv</h3>
                <p className="experience-text">Video Monetization SAAS</p>
                <hr></hr>
                <h5 className="experience-text designation">
                  Customer Success, Team Lead
                </h5>
                <a
                  className="experience-links"
                  id="Uscreen"
                  onClick={(e) => onClickEvent4Geeks(e.target.id)}
                >
                  Click to find out more
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Single Advisor--> */}
          <div className=" experience-card experience-card-background col-12 col-sm-6 col-lg-3">
            <div
              className="single_advisor_profile wow fadeInUp inline-styling"
              data-wow-delay="0.3s"
            >
              {/* <!-- Team Thumb--> */}
              <div className="advisor_thumb">
                <img className="w-100 pt-2" src={SQSPLogo} alt=""></img>
              </div>
              {/* <!-- Team Details--> */}
              <div className="single_advisor_details_info">
                <h3 className="experience-text">Squarespace Enterprise</h3>
                <p className="experience-text">Enterprise and Premium SAAS</p>
                <hr></hr>
                <h5 className="experience-text designation">
                  Senior Team Lead, Account Management
                </h5>
                <a
                  className="experience-links"
                  id="SQSPENT"
                  onClick={(e) => onClickEvent4Geeks(e.target.id)}
                >
                  Click to find out more
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Single Advisor--> */}
          <div className="  experience-card experience-card-background col-12 col-sm-6 col-lg-3">
            <div
              className="single_advisor_profile wow fadeInUp inline-styling"
              data-wow-delay="0.4s"
            >
              {/* <!-- Team Thumb--> */}
              <div className="advisor_thumb">
                {" "}
                <img className="w-100 pt-2" src={SQSPLogo} alt=""></img>
              </div>
              {/* <!-- Team Details--> */}
              <div className="single_advisor_details_info">
                <h3 className="experience-text">Squarespace</h3>
                <p className="experience-text">Website SAAS</p>
                <hr></hr>
                <h5 className="experience-text designation">
                  Senior Team Lead, Customer Success
                </h5>
                <a
                  className="experience-links"
                  id="SQSPCS"
                  onClick={(e) => onClickEvent4Geeks(e.target.id)}
                >
                  Click to find out more
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Single Advisor--> */}
          <div className="  experience-card experience-card-background col-12 col-sm-6 col-lg-3">
            <div
              className="single_advisor_profile wow fadeInUp inline-styling"
              data-wow-delay="0.4s"
            >
              {/* <!-- Team Thumb--> */}
              <div className="advisor_thumb">
                {" "}
                <img className="w-100 pt-2" src={SQSPLogo} alt=""></img>
              </div>
              {/* <!-- Team Details--> */}
              <div className="single_advisor_details_info">
                <h3 className="experience-text">Squarespace</h3>
                <p className="experience-text">Website SAAS</p>
                <hr></hr>
                <h5 className="experience-text designation">
                  Senior Team Lead, Customer Support
                </h5>
                <a
                  className="experience-links"
                  id="SQSPSup"
                  onClick={(e) => onClickEvent4Geeks(e.target.id)}
                >
                  Click to find out more
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Single Advisor--> */}
          <div className="  experience-card  experience-card-background col-12 col-sm-6 col-lg-3">
            <div
              className="single_advisor_profile wow fadeInUp inline-styling"
              data-wow-delay="0.4s"
            >
              {/* <!-- Team Thumb--> */}
              <div className="advisor_thumb">
                {" "}
                <img className="w-100 pt-2" src={SQSPLogo} alt=""></img>
              </div>
              {/* <!-- Team Details--> */}
              <div className="single_advisor_details_info">
                <h3 className="experience-text">Squarespace</h3>
                <p className="experience-text">Website SAAS</p>
                <hr></hr>
                <h5 className="experience-text designation">
                  Customer Care Advisor, Customer Support
                </h5>
                <a
                  className="experience-links"
                  id="SQSPAdv"
                  onClick={(e) => onClickEvent4Geeks(e.target.id)}
                >
                  Click to find out more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviousExperience;
