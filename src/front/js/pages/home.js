import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import anime from "animejs/lib/anime.es.js";
import "../../styles/home.css";

import Social from "../component/Social";
import UnsplashAPIIMG from "../component/UnsplashAPIIMG";
import PreviousExperience from "../component/PreviousExperience";
import AboutMe from "../component/AboutMe";
import SkillsAndExpertise from "../component/SkillsAndExpertise";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const darkText = store.darkModeText;
  const toggle = store.toggle;
  console.log(toggle);

  return (
    <div className="">
      <div id="dark-page" className="text-center">
        <AboutMe />
        <div className="container p-1">
          <h2>Languages</h2>
		  <div className=" container d-flex">
          <img
		  className="thumbnail"
            alt="Visual Studio Code"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          />
          <img className="thumbnail"
            alt="HTML5"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <img
            alt="CSS3"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
          <img
            alt="JavaScript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <img
            alt="React"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <img
            alt="Python"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          />
          <img
            alt="Flask"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
          />
          <img
            alt="Git"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />

          <img
            alt="GitHub"
            src="https://user-images.githubusercontent.com/3369400/139448065-39a229ba-4b06-434b-bc67-616e2ed80c8f.png"
          />
          <img
            alt="Jest"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
          />
        </div>
		</div>
        <SkillsAndExpertise />
        <hr></hr>
        <PreviousExperience />
        <UnsplashAPIIMG />
      </div>

      <Social />
    </div>
  );
};
