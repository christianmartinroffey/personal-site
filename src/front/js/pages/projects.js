import React from "react";
import "../../styles/home.css";

function Projects() {
  return (
    <div className="" id="projects">
      <h2 className="pl-5 display-5 ">Projects </h2>
      <br className="" />

      <br className="" />
      <div className="container-fluid d-flex">
        <div className="col-4">
          <h2 className="">Chore Manager</h2>
          <h5 className="pr-3 ">Take a look at the demo here: </h5>
        </div>
        <div class="embed-responsive ratio ratio-4x3  ">
          <iframe
            src="https://www.youtube.com/embed/bGGqFwnh2OI?start=4392"
            title="Chore Manager Demo"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <br className="" />

      <div className="row ">
        <div className="container d-flex   ">
          <div class="embed-responsive ratio ratio-4x3 ">
            <iframe
              class="embed-responsive-item"
              src="https://getirelandonline.squarespace.com/"
              allowfullscreen
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
      </div>
    </div>
  );
}

export default Projects;
