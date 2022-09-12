import React, { useState } from 'react';
import "../../styles/customstyles.css/accordion.css";
import Accordion from 'react-bootstrap/Accordion';


function SkillsAndExpertise() {


  var skillsOptions = [
    {
      id: 0,
      skillName: "Frontend",
      languages: "Languages: HTML, CSS, Javascript, React, Bootstrap",
      description: "More details on languages",
      projectExamples: "Worked on X project"
    },
    {
      id: 1,
      skillName: "Backend",
      languages: "Languages: Python, Flask, API",
      description: "More details on languages",
      projectExamples: "Worked on X project"
    },
    {
      id: 2,
      skillName: "Project Management",
      languages: "Agile Methodologies; Scrum, Kanban, Scranban",
      description: "JIRA, Product Board, Trello, Github",
      projectExamples: "Implemented Agile metholodogies globally for Customer Operations Team Leads and over 30 individuals, leading to improved global efficiency when completing and collaborating on tasks across 3 office locations."
    },
    {
      id: 3,
      skillName: "skill 4",
      status: "Finalized"
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
    <div className='container-fluid pt-5 pb-5 ' id="dark-page">
      <div className='row'>
        
      <h2 className='p-3 col-4 display-4'>Skills & Expertise</h2>
      <div className='col-8 ' >
{
              skillsOptions.map((skillOption, index)=>{ return(
      <Accordion className="p-1 border rounded " id="dark-page" flush >
      <Accordion.Item  className="bg-light" id="dark-page " eventKey={skillOption.id}>
        <Accordion.Header className="" id="dark-page">{skillOption.skillName}</Accordion.Header>
        <Accordion.Body>
        <p>{skillOption.languages}</p>
        <p>{skillOption.description}.</p>
        <p>{skillOption.projectExamples}.</p>
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