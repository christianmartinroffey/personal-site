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
  
 const findSkills = () => {
  skillsOptions.map((skillOption, index)=>{
    console.log(skillOption.skillName, "skill name")
  })};
findSkills()


const [open, setOpen] = useState(false)

const openClickHandler = (e) =>{
  setOpen(true);
  console.log(e);
}

  return (
    <div className='container-fluid '>
      <h2 className='p-3'>Skills & Expertise</h2>
      {
              skillsOptions.map((skillOption, index)=>{ return(
        <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed"   onClick={(e) => openClickHandler(e.target.id)} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" id={index}>
        {skillOption.skillName}
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      
      <div class="accordion-body">
        <p>{skillOption.languages}</p>
        <p>{skillOption.description}.</p>
        <p>{skillOption.projectExamples}.</p>
      </div>
    </div>
  </div>
</div>
                )  })
            }   
 
    </div>
  )
}




export default SkillsAndExpertise