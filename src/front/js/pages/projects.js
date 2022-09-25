import React from 'react'
import "../../styles/home.css"

function Projects() {
  return (
    <div className=''>
      <h1>Here's an overview on some projects</h1>
      <h2>Chore Manager</h2>
      <div className='container d-flex'>
      <h3 className='pr-3'>Take a look at the demo here: </h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/bGGqFwnh2OI?start=4392" title="Chore Manager Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
     
      <h2>Get Ireland Online</h2>
      <div className='container d-flex'>
      <p>A passion project aimed at helping local businesses transition online during the COVID-19 pandemic</p>
      <iframe className='SQSPIreland' src="https://getirelandonline.squarespace.com/" ></iframe>
      </div>
    </div>
  )
}

export default Projects