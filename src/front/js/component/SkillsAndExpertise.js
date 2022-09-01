import React, { useState } from 'react';
import "../../styles/customstyles.css/accordion.css";


function SkillsAndExpertise() {


  var skillsOptions = [
    {
      id: 0,
      skillName: "Skill 1",
      status: "In Progress"
    },
    {
      id: 1,
      skillName: "Skill 2",
      status: "In Progress"
    },
    {
      id: 2,
      skillName: "Skill 3",
      status: "In Progress"
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

const openClickHandler = () =>{
  setOpen(true);
}

  return (
    <div className='container-fluid d-flex'>
      <h2>Skills & Expertise</h2>
      
      {
              skillsOptions.map((skillOption, index)=>{ return(
              <div className=''>
                <ul>
<li>
    <input type="checkbox" checked></input>
    <i></i>
    <h2>{skillOption.skillName}</h2>
    <p>{skillOption.status}.</p>
  </li>
  </ul>
  
    </div>
                
                )  })
            }   
      
          
    </div>
  )
}

export default SkillsAndExpertise