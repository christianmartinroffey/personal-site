import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

function LanguageIcons() {
  const { store, actions } = useContext(Context);

const darkMode = store.toggle;
console.log(darkMode, "from icons");

  return (
    <div className="container-fluid pt-4 pb-4" id="dark-page">
      {/* <h2 className='pb-3'>Languages & Tools</h2> */}
      <div className=" row  justify-content-evenly d-flex ">
      
      <img
        className=" icon-size p-2 col"
        alt="Visual Studio Code"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
      />
      <img
        className=" icon-size p-2 col "
        alt="HTML5"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      />

      <img
        className="icon-size p-2 col"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
      />

      <img
        className=" icon-size p-2 col"
        alt="CSS3"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      />
      <img
        className=" icon-size p-2 col"
        alt="JavaScript"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      />
      <img
        className="  icon-size p-2 col"
        alt="React"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      />
      <img
        className=" icon-size bg-white rounded-circle p-2 col"
        alt="GitHub"
        src="https://user-images.githubusercontent.com/3369400/139448065-39a229ba-4b06-434b-bc67-616e2ed80c8f.png"
      />
      <img
        className="  icon-size p-2 col"
        alt="Python"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      />
      <img
        className="icon-size bg-white rounded-circle  p-2 col"
        alt="Flask"
         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />     
     
      <img
        className=" icon-size p-2 col"
        alt="Heroku"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg"
      />

      <img
        className="icon-size p-2 col"
        alt="Git"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      />
 <img
        className=" icon-size bg-white rounded-circle p-2 col"
        alt="SQLAlchemy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg"
      />
      
      <img
        className=" icon-size p-2 col"
        alt="Jest"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
      />
      </div>
    </div>
  );
}

export default LanguageIcons;
