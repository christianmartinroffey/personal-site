import React, { useState } from 'react';
import "../../styles/customstyles.css/accordion.css";
import Accordion from 'react-bootstrap/Accordion';


function SkillsAndExpertise() {

const lineBreak = `<br></br>`

  let skillsOptions = [
    {
      id: 0,
      skillName: "Frontend",
      languages: "Languages: HTML, CSS, Javascript, React, Bootstrap",
      description: "Adept at building out front-end applications using the most popular languages and frameworks currently used to create a custom and professional user experience.",
      projectExamples: "Projects: My Portfolio, Chore Manager, Star Wars Reading Blog, Todo List"
    },
    {
      id: 1,
      skillName: "Backend",
      languages: "Languages: Python, Django, Flask, API, MySQL, Postgres, SQLAlchemy",
      description: "Able to build and maintain endpoints to support web applications. Specifically, user creation and validation, alongside industry standard requirements of sending emails on sign up as well as reset password process based on token authentication and verification",
      projectExamples: "Projects: JudgeFit, Chore Manager, JWT Authentication, Instagram Data Modelling",
      experience: "Experience: Fideltour, Usizy"
    },
    {
      id: 2,
      skillName: "Project Management",
      languages: `Agile Methodologies; Scrum, Kanban, Scranban & OKR methodology`,
      description: "JIRA, Product Board, Trello, Github",
      projectExamples: "Implemented Agile metholodogies globally for Customer Operations Team Leads and over 30 individuals, leading to improved global efficiency when completing and collaborating on tasks across 3 office locations, increasing overall department productivity and accountability.",
      experience: "Experience: Squarespace, Usizy"
    },
    {
      id: 3,
      skillName: "Tools",
      languages: `GitHub, PyCharm, VSCode, Heroku, Gitpod, JIRA, Product Board, ClickUp, Google Docs/Sheets, SquareSpace`,
      description: "Familiar with a wide range of different systems and tools aimed at improving the day to day workflow and cross-team collaboration. Also includes project management, product management, data analysis and coding tools/systems.",
    }
  ];
  
//  const findSkills = () => {
//   skillsOptions.map((skillOption, index)=>{
//     console.log(skillOption.skillName, "skill name")
//   })};
// findSkills()


const [open, setOpen] = useState(false);
const [listID, setListID] = useState();

const openClickHandler = (e) =>{
  if(open == false){
    setOpen(true)}
  else( setOpen(false));
  setListID(e);
  console.log(e, open, "clickhandler");
}

console.log(listID, "index", open, "status");

  return (
  
    <div className='container-fluid pt-5 pb-5 ' >

      <div className='row'  >
        
      <h2 className='pt-3 pb-3 display-5 text-decoration-underline'>Skills & Expertise</h2>
      <div className=' p-4' >
{
              skillsOptions.map((skillOption, index)=>{ return(
      <Accordion className="p-1 border rounded " id="dark-page" flush >
      <Accordion.Item  className="bg-light" id="dark-page " eventKey={skillOption.id}>
        <Accordion.Header className="" id="dark-page">{skillOption.skillName}</Accordion.Header>
        <Accordion.Body>
        <p>{skillOption.languages}</p>
        <p>{skillOption.description}.</p>
        <p>{skillOption.projectExamples}.</p>
        <p>{skillOption.experience}.</p>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
 )  })
}  
</div>
</div>
</div>
   
  )
}




export default SkillsAndExpertise