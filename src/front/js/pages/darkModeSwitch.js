import React, { useState } from 'react';
import anime from 'animejs/lib/anime.es.js';


const DarkModeSwitch = () => {

    const moonPath = "M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 52.101 13.21 55 20.209 55 27.5 C 55 34.791 52.101 41.79 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z";
	const sunPath = "M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 33.991 9.89 26.93 20.209 26.93 27.5 C 26.93 34.791 33.689 45.261 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z";
	const [toggle, setToggle] = useState(false);
    const [text, setText] = useState("Click the sun to turn on darkmode");
    
    const darkOnClick = () =>{
        console.log("button clicked");
        const timeline = anime.timeline({
            duration : 750,
            easing : "easeOutExpo"
        });
        //add
        timeline
        .add({
            targets:".moon",
            d:[{value: toggle ? moonPath: sunPath}] //moonPath ->sunpath
        })
        .add({
            targets:'#dark_mode',
            rotate : toggle? 0 : 320
        },"-=350")
        .add({
            targets: "#dark-page",
            backgroundColor: toggle ? 'rgba(22,22,22)' : 'rgba(255,255,255, 0.9)',
            color: toggle ?  'rgba(255,255,255, 0.9)' : 'rgba(22,22,22)'
        },"-=700");
        
        if(!toggle){
            setToggle(true);
            setText("Dark Mode");
        }else{
            setToggle(false);
            setText("Light Mode");
        }   
    };
		

  return (
    <div id='dark-page'>
        <h1>{text}</h1>
            <svg onClick={darkOnClick} id="dark_mode" width="55" height="55" viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg">
			    <path className="moon" d="M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 52.101 13.21 55 20.209 55 27.5 C 55 34.791 52.101 41.79 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z" fill="#fee140"/>   
            </svg>
    </div>
    
  )
}

export default DarkModeSwitch