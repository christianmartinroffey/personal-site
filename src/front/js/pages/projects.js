import React from "react";
import "../../styles/home.css";

function Projects() {
  return (
    <div  className="pb-5">
    <div className="pt-5" >
      <h2 className="pl-5 display-5 ">Projects </h2>
      <br className="" />
     
      <div className="container-fluid d-flex">
        <div className="col-4">
          <h2 className="">JudgeFit</h2>
          <h3 className="pr-3 ">Using machine learning tools such as Mediapipe and OpenCV, JudgeFit aims to solve the issue of standardisation and objectivity when judging athletic performance. </h3>
          <br className="" />
          <h5 className="pr-3 ">Take a look at the demo here: </h5>    
        </div>
   
        <div className="embed-responsive ratio ratio-4x3  ">
          <iframe 
            width="1524" 
            height="585" 
            src="https://www.youtube.com/embed/sOcGW-yd7is" 
            title="" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>

          </iframe>
        </div>
      </div>

      <br className="" />
      <br className="" />
      <div className="container-fluid d-flex">
  
        <div className="embed-responsive ratio ratio-4x3  ">
          <iframe
            src="https://www.youtube.com/embed/bGGqFwnh2OI?start=4392"
            title="Chore Manager Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-4">
          <h2 className="">Chore Manager</h2>
          <h5 className="pr-3 ">Take a look at the demo here: </h5>
        </div>
      </div>
      <br className="" />
      

      {/* <div className="row ">
        <div className="container d-flex   ">
          <div className="embed-responsive ratio ratio-4x3 ">
            <iframe
              className="embed-responsive-item"
              src="https://getirelandonline.squarespace.com/"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-4 p-2">
            <h2 className="pb-5 ">Get Ireland Online</h2>
            <h5 className="">
              A passion project aimed at helping local businesses transition
              online during the COVID-19 pandemic
            </h5>
          </div>
        </div>
      </div> */}
    </div>
    </div>
  );
}

export default Projects;
