import React, { useState } from "react";
import "../../styles/customstyles.css/experience.css";
import LogoUscreen from "../../../front/img/logouscreen.png";
import SQSPLogo from "../../../front/img/SQSPLogo.png";
import logo4geeks from "../../img/logo4geeks.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import usizy_image from "../../img/usizy_image.png";

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
    {
      id: 7,
      company: "uSizy",
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
    <div id="experience">
      <Modal className="text-black" show={show} onHide={handleClose}>
        {/* section for 4geeks */}
        {company == "uSizy" ? (
          <Modal.Body>
            <h2>Junior Software Engineer</h2>
            <p>Website: <a href="https://usizy.com/">uSizy</a> </p>
            <h4 className="bold-text pb-2">Summary: Integrate uSizy solutions for e-commerce businesses. 
            </h4>
            <h3>Skills and Languages supported:</h3>
            <ul>
              <li className="modal-list"> Frontend: Javascript, React, HTML, CSS, Bootstrap</li>
              <li className="modal-list"> Backend: Python, Django, API, SQL</li>
              <li className="modal-list"> Git: Terminal, Github, Gitpod, Heroku </li>
            </ul>
            <p>October 2022 - Current</p>
          </Modal.Body>
        ) : 
         
        company == "4geeksMentor" ? (
          <Modal.Body>
            <h2>Full Stack Engineer Bootcamp</h2>
            <p>Website: <a href="https://4geeks.com/">4Geeks</a> </p>
            <h4 className="bold-text pb-2">Mission: Provide tutorships and support to new Full Stack students. 
            </h4>
            <h5 className="pb-2"> <a href="https://4geeksacademy.com/es/coding-bootcamps/full-stack-part-time">Full Stack Developer Course Details</a> </h5>
                <h3>Skills and Languages supported:</h3>
            <ul>
              <li className="modal-list"> Frontend: Javascript, React, HTML, CSS, Bootstrap</li>
              <li className="modal-list"> Backend: Python, Flask, API, SQL</li>
              <li className="modal-list"> Test Driven Development: Jest</li>
              <li className="modal-list"> Git: Terminal, Github, Gitpod, Heroku </li>
            </ul>
            <p>September 2022 - Current</p>
          </Modal.Body>
        ) : company == "4geeks" ? (
          <Modal.Body>
            <h2>Full Stack Engineer Bootcamp</h2>
            <p>Website: <a href="https://4geeks.com/">4Geeks</a> </p>
            <h4 className="bold-text pb-2">Mission: Develop a portfolio of Front, Back and Full Stack applications, demonstrating coding proficiency. 
            </h4>
            <h5 className="pb-2">Final project: <a href="https://chore-manager-app.herokuapp.com/">Chore Manager</a> </h5>
              <h3> Specific areas built included:</h3>
                <ul>
                  <li className="modal-list"> Sign up, Login and Password recovery views, logic and functionality, both back and front. Showcasing ability to work across Full Stack languages.</li>
                  <li className="modal-list"> YouTube Search API integration allowing the user to search and play the first resulting video on the site whilst logging a chore. </li>
                  <li className="modal-list"> Random quote generator API, also demonstrating REST API knowledge.</li>
                  <li className="modal-list"> Landing page design and animations.</li>
                </ul>
                <h3>Skills and Languages learned:</h3>
            <ul>
            
              <li className="modal-list"> Frontend: Javascript, React, HTML, CSS, Bootstrap</li>
              <li className="modal-list"> Backend: Python, Flask, API, SQL</li>
              <li className="modal-list"> Test Driven Development: Jest</li>
              <li className="modal-list"> Git: Terminal, Github, Gitpod, Heroku </li>
            </ul>
            <h3>Main Projects</h3>
            <ul>
              <li className="modal-list"><a href="https://chore-manager-app.herokuapp.com/"> Chore Manager </a></li>
              <li className="modal-list"><a href="https://github.com/christianmartinroffey/Authentication-JWT-exercise"> JWT Authentication </a></li>
              <li className="modal-list"><a href="https://github.com/christianmartinroffey/Star-Wars-Blog-Reading-List"> StarWars API blog</a></li>
              <li className="modal-list"><a href="https://github.com/christianmartinroffey/ReactTodoListLocal"> React To-Do List</a></li>
            </ul>
            <p>May 2022 - September 2022</p>
          </Modal.Body>
        ) : company == "Uscreen" ? (
          <Modal.Body>
            <h2>Team Lead Customer Success Organization</h2>
            <p>Website: <a href="https://www.uscreen.tv/">Uscreen.tv</a></p>
            <h3 className="bold-text pb-2">Mission: To retain, upsell and ensure customers are seeing success on the
              platform. 
            </h3>
            <h3>Responsibilities: </h3>
              <p className="modal-list"> Retention & upsell strategy for SMBs and
              Enterprise-level companies</p>
              <p className="modal-list"> Team growth, expantion and retention to support the needs of our customers.</p>
              <h3> Highlights:</h3>
            <ul className="container p-1">
              <li className="modal-list"> Set and delivered on department OKRs, ensuring operational
                efficiency and company-wide revenue targets.
              </li>
              <li className="modal-list"> Established SLA, internal processes</li>
              <li className="modal-list"> Owned company-wide churn retrospectives, highlightin improvement
                areas across all parts of the company; Product, Sales, CS,
                Support.
              </li>
              <li className="modal-list"> Developed and launched Failed/Delinquent churn recovery,
                decreasing the % of lost revenue from failed payments by over
                60%.
              </li>
              <li className="modal-list"> Implemented the company's first expansion/upsell initiative
                opening up an additional stream of revenue from the CS team.
              </li>
              <li className="modal-list"> Created and trained the team on Quarterly business reviews aimed
                at demonstrating on-going platform and CSM value.
              </li>
              <li className="modal-list"> Defined deparment wide Customer Lifecycle spanning across all
                tiers and customer types (SMB to Enterprise).
              </li>
              <li className="modal-list"> Regular structured team trainings on best practices and industry
                standards.
              </li>
            </ul>
            <p>February 2021 - June 2022</p>
          </Modal.Body>
        ) : company == "SQSPENT" ? (
          <Modal.Body>
            <h2>Account Management Lead: Retention, Onboarding & Conversion</h2>
            <a href="https://www.squarespace.com/enterprise"></a>
            <p>
              Set the retention and sales funnel strategy for Enterprise-level companies from the
              ground up.
            </p>
           <h3>Included:</h3>
            <ul>
            <li className="modal-list"> Building initial sales funnel generating over $120,000 in sales within the first 9 months of launch.</li>
            <li className="modal-list"> Established KPIs across AM team.</li>
              <li className="modal-list"> Quarterly business reviews.</li>
              <li className="modal-list"> Customer Lifecycle.</li>
            </ul>
            <h3>Achievements</h3>
            <ul>
              <li className="modal-list"> Established company-first automated pipeline of upsell opportunities within current customer groups leading to an increase in customer base of 20% through data analysis.
              </li>
              <li className="modal-list"> Launched automated chat-bot integration with 3rd party tooling to improve sales lead quality by 35%.</li>
            </ul>
          </Modal.Body>
        ) : company == "SQSPCS" ? (
          <Modal.Body>
            <h2>Customer Success Team Lead: Retention, Onboarding & Sales</h2>
            <a href="https://www.squarespace.com/"></a>
            <p>
              Lead the Dublin-based Customer Success team, focusing on 3 main
              areas to ensure platform growth; Conversion, Onboarding & Retention. <br className="pt-1"/>
              This was an experimental team with a focusing on testing new opportunities to impact platform growth.
            </p>
            <h3> Included:</h3>
            <ul>
              <li className="modal-list"> Prioritized Live Chat routing for trialers to increase
                conversion with more than 48% success rate. Baseline of 21%.
              </li>
              <li className="modal-list"> Identify and implement proactive reach out for top-selling
                commerce merchants (by GMV) to ensure retention.
              </li>
              <li className="modal-list"> Hired and grew the Success team globally, across 3 locations
                from 5 to 16.
              </li>
            </ul>
            <h3>Achievements</h3>
            <ul>
              <li >
                <a href="https://getirelandonline.squarespace.com/">
                  Get Ireland Online</a> - A give-back initiative for struggling businesses during the pandemic.
              </li>
              <li className="modal-list"> Launch of company-first paid onboarding consultations, opening up an untapped revenue stream.</li>
              <li className="modal-list"> 1% customer-base retention performance resulting in 1000s of retained customers.</li>
            </ul>
          </Modal.Body>
        ) : company == "SQSPSup" ? (
          <Modal.Body>
            <h2>Senior Team Lead: Customer Support</h2>
            <a href="https://www.squarespace.com/"></a>
            <p>Lead, develop and motivate a team of 10+ Customer Care Advisor to operational excellence.</p>
            <p>Mentor and coach other Team Leads to improve their agents' performance.</p>
           <h3>Included:</h3>
            <ul>
              
              <li className="modal-list"> Leading and coordinating global performance calibration sessions across 3 different locations globally to over 30 Team Leads, improving the performance for their teams.</li>
              <li className="modal-list"> Implemented key project management (Scrum and Kanban) methodologies across the Customer Operations department, contributing to the completion of department OKRs on a quarterly basis and resulting in 100s of hours and multiple FTE in efficiency improvements.</li>
              <li className="modal-list"> Ensure team members are consistently performing and hitting KPIs by continuously delivering mission-focused sessions and consistent feedback on a daily basis.</li>
              <li className="modal-list"> Project manage efficiency initiatives to reduce operational waste. Identified over 10 front line agent processes to improve or remove, resulting in over $150,000 in annual efficiency savings.</li>
            </ul>
            <h3>Achievements</h3>
            <ul>
             
              <li className="modal-list"> Promoted to Senior Team Lead after 8 months as a Team Lead thanks to my impact to the department.</li>
              <li className="modal-list"> Team was consistently top in performance (Productivity, Quality & CSAT) globally.</li>
              <li></li>
            </ul>
          </Modal.Body>
        ) : company == "SQSPAdv" ? (
          <Modal.Body>
            <h1>Customer Care Advisor: Customer Support</h1>
            <a href="https://www.squarespace.com/"></a>
            <p>Customer facing support technical support role, focused on helping customers in timely manner with high quality responses.</p>
            <h3>Included:</h3>
            <ul>
              
              <li className="modal-list"> Productivity, Quality and CSAT metrics and target</li>
              <li className="modal-list"> New hire onboarding and platform training</li>
              <li className="modal-list"> Subject matter expert team trainings e.g. Creating anchor links, reading & understanding XML files </li>
            </ul>
            <h3>Achievements</h3>
            <ul>
              
              <li className="modal-list"> Winner of the first Support organization recognition programme
                for productivity and quality performance by senior Leadership:
                Spotlight.
              </li>
              <li className="modal-list"> Global presentation on productivity hacks and tips for Advisors.</li>
            </ul>
          </Modal.Body>
        ) : (
          <Modal.Body>Company does not match</Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container p-4">
        <div className="row  justify-content-center">
          <div className="col-12 col-sm-8 col-lg-6">
            {/* <!-- Section Heading--> */}
            <div
              className="section_heading text-center fadeInUp inline-styling"
              data-wow-delay="0.2s"
            >
              <h2 className="p-4 display-4">Previous Experience</h2>
              <h5 className="pb-4">
                Get more specifics of my experience and expertise.
              </h5>
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
                <img className="w-100 pt-2" src={usizy_image} alt="uSizy image" style={{height: "250px", width: "40git0px"}}></img>
              </div>
              {/* <!-- Team Details--> */}
              <div className="single_advisor_details_info">
                <h3 className="experience-text">uSizy</h3>
                <p className="experience-text">Junior Software Engineer</p>
                <hr></hr>
                <h5 className="experience-text designation">
                  Junior Software Engineer
                </h5>
                <a
                  className="experience-links"
                  id="uSizy"
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
                  Mentor, Full Stack Developer
                </h5>
                <a
                  className="experience-links"
                  id="4geeksMentor"
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
                <p className="experience-text">Enterprise and Premium Website SAAS</p>
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
