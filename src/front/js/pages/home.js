import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import anime from "animejs/lib/anime.es.js";
import "../../styles/home.css";

import Social from "../component/Social";
import UnsplashAPIIMG from "../component/UnsplashAPIIMG";
import PreviousExperience from "../component/PreviousExperience";
import AboutMe from "../component/AboutMe";
import SkillsAndExpertise from "../component/SkillsAndExpertise";
import LanguageIcons from "../component/languageIcons";
import BackToTop from "../component/BackToTop";
import Projects from "./projects";


export const Home = () => {
  const { store, actions } = useContext(Context);
  const darkText = store.darkModeText;
  const toggle = store.toggle;
  console.log(toggle);

  return (
    <div className="">
      <div id="dark-page" className="text-center">
        <AboutMe />
        <div class="module">
    <svg class="module__wave" viewBox="0 0 1000 158">
    <path fill="#fff" d="M1000,30.1V158H0V0c169.7,238.5,374.3-76,502.6,106.8
    C615.7,268.2,759.9-15.4,1000,30.1z" data-to="M1000,157v1H0v-1h502.6H1000z" />
  </svg>
 
  </div>
        {/* <LanguageIcons/> */}
        <SkillsAndExpertise />
        {/* <Projects/> */}
        <PreviousExperience />
        {/* <UnsplashAPIIMG /> */}
        <BackToTop/>
      </div>

      {/* <Social /> */}
    </div>
  );
};
