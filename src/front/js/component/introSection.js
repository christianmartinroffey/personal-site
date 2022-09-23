import React from 'react'
import PageSeparator from './pageSeparator'

function IntroSection() {
  return (
    <div className='container-fluid' id="dark-page">
        <h2 className="pb-4 display-4" id="portfolio-section">A brief intro:</h2>
      <div className="container d-flex ">
        <ul>
          <li className="display-6">Professional</li>
          <li className="pt-4 pb-4">
          - 7+ years web-based SAAS experience, across Enterprise & SMB. 💻 
          </li>
          <li className=" pb-4"> 
          - Coding mentor for 4Geeks 🚀 
          </li>
          <li className=" pb-4"> 
          - Technical Support, Account Management, Department & Global Leadership. 👨‍💻
          </li>
          <li className=" pb-4"> 
          - Adept at identifying improvement opportunities and increasing operational efficiency. 💡
          </li>
        </ul>
       
        <ul>
        <li className="display-6 pb-4">Personal</li>
        <li className="pl-3 pb-4">
          - I'm a father to baby Noah. 👶
        </li>
        <li className="pl-3 pb-4">
          - CrossFit athlete, coach (in my spare time) & gym afficionado. 🏋️‍♂️
        </li>
        <li className="pl-3 pb-4">
          - Live in paradise 🌴 Mallorca, Spain 🌴 
        </li>
        <li className="pl-3 pb-4">
          - Love a challenge and enjoying the Full Stack Developer journey. 🖥️ 
        </li>  
        <li className="pl-3">
          - Fluent in 3 languages, English 🇬🇧 & Spanish 🇪🇸 native, Italian 🇮🇹 professional proficiency.
        </li>
        </ul>
      </div>
      <PageSeparator/>
    </div>

  )
}

export default IntroSection