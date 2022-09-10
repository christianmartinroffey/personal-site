import React from 'react'
import "../../styles/home.css"

function LanguageIcons() {
  return (
    
         <div className="container-fluid pt-4 pb-4" id="dark-page">
          {/* <h2 className='pb-3'>Languages & Tools</h2> */}
		  <div className=" container d-flex justify-content-center">
          <img
		  className="img-fluid icon-size m-4"
            alt="Visual Studio Code"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          />
          <img className="img-fluid m-4 icon-size"
            alt="HTML5"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <img className="img-fluid m-4 icon-size"
            alt="CSS3"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
          <img className="img-fluid m-4 icon-size"
            alt="JavaScript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <img className="img-fluid m-4 icon-size"
            alt="React"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <img className="img-fluid m-4 icon-size"
            alt="Python"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          />
          <img className="img-fluid m-4 icon-size bg-white rounded-circle"
            alt="Flask"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
          />
          <img className="img-fluid m-4 icon-size bg-white rounded-circle" 
          alt="SQLAlchemy" 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" 
          />
          <img className="img-fluid m-4 icon-size"
          alt="Heroku"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" />
      
          <img className="img-fluid m-4 icon-size"
            alt="Git"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />

          <img className="img-fluid m-4 icon-size bg-white rounded-circle"
            alt="GitHub"
            src="https://user-images.githubusercontent.com/3369400/139448065-39a229ba-4b06-434b-bc67-616e2ed80c8f.png"
          />
          <img className="img-fluid  m-4 icon-size"
            alt="Jest"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
          />
        </div>
		</div>

  )
}

export default LanguageIcons