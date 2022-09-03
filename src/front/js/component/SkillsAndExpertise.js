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
      <button class={skillOption.id == listID && open == true ? "accordion-button expanded bg-secondary show" : skillOption.id == listID && open == false ? "accordion-button collapsed bg-primary" : "accordion-button expanded bg-warning" } data-bs-toggle="collapse" data-bs-target={listID} onClick={(e) => openClickHandler(e.target.id)} id={skillOption.id}>
        {skillOption.skillName}
      </button>
    </h2>
    <div id={listID} class={skillOption.id == listID ? "accordion-collapse collapsed" : "accordion-collapse collapsed"} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
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
 
    </div>
  )
}




export default SkillsAndExpertise