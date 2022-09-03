import React, { useState } from 'react';
import "../../styles/customstyles.css/accordion.css";


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
      languages: "In Progress",
      description: "More details on languages",
      projectExamples: "Worked on X project"
    },
    {
      id: 2,
      skillName: "Skill 3",
      languages: "In Progress",
      description: "More details on languages",
      projectExamples: "Worked on X project"
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
    <div className='container-fluid '>
      <h2 className='p-3'>Skills & Expertise</h2>
      {
              skillsOptions.map((skillOption)=>{ return(
        <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
    {/* <button class={!open ? 'accordion-button collapsed' : 'accordion-button collapse'}   onClick={(e) => openClickHandler(e.target.id)} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" id={index}> */}
      <button class={skillOption.id == listID && open == true ? "accordion-button expanded show" : skillOption.id == listID && open == false ? "accordion-button collapsed" : "accordion-button collapsed" } data-bs-toggle="collapse" data-bs-target={skillOption.id} onClick={(e) => openClickHandler(e.target.id)} id={skillOption.id}>
        {skillOption.skillName}
      </button>
    </h2>
    <div id={skillOption.id} class="accordion-collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" id={listID}>
        <p>{skillOption.languages}</p>
        <p>{skillOption.description}.</p>
        <p>{skillOption.projectExamples}.</p>
      </div>
    </div>
  </div>
</div>
                )  })
            }   

<h2>Collapsibles</h2>

<p>A Collapsible:</p>
<button type="button" className="collapsible">Open Collapsible</button>
<div className="content">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<p>Collapsible Set:</p>
<button type="button" className="collapsible">Open Section 1</button>
<div className="content">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<button type="button" className="collapsible">Open Section 2</button>
<div className="content">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<button type="button" className="collapsible">Open Section 3</button>
<div className="content">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
 
    </div>
  )
}




export default SkillsAndExpertise