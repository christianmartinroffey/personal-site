import React from "react";
import "../../styles/home.css"
import GitHubLogo from "../../img/GitHubLogo.svg"
import BackToTop from "./BackToTop";

function Social() {
  return (
    <div className="container-fluid " id="dark-page" >
      <hr></hr>
      <div className="container">
      <h3 className="social-text">
        Social<span className="dot-color social-text">.</span>
      </h3>
      
      <ul className="icon-wrapper container d-flex pt-3 ">
        <li className="social-icons">
        <a
          className=" p-2"
          href="https://github.com/christianmartinroffey"
        >
        <svg className="bg-white rounded-circle" width="60" height="59" xmlns="http://www.w3.org/2000/svg"><g fill="#151513" fill-rule="evenodd"><path d="M30 0C13.434 0 0 13.542 0 30.247 0 43.61 8.596 54.949 20.516 58.948c1.5.28 2.05-.656 2.05-1.455 0-.721-.028-3.104-.041-5.631-8.346 1.83-10.107-3.57-10.107-3.57-1.365-3.495-3.331-4.425-3.331-4.425-2.722-1.877.205-1.839.205-1.839 3.013.214 4.599 3.117 4.599 3.117 2.676 4.624 7.018 3.288 8.73 2.515.27-1.955 1.047-3.29 1.905-4.045-6.664-.765-13.669-3.358-13.669-14.948 0-3.302 1.172-6 3.091-8.119-.311-.761-1.338-3.838.291-8.004 0 0 2.52-.813 8.252 3.1 2.393-.67 4.96-1.006 7.51-1.017 2.549.011 5.117.347 7.515 1.017 5.726-3.913 8.241-3.1 8.241-3.1 1.633 4.166.606 7.243.295 8.004 1.923 2.119 3.087 4.817 3.087 8.12 0 11.616-7.018 14.174-13.698 14.923 1.076.939 2.034 2.78 2.034 5.601 0 4.048-.034 7.305-.034 8.301 0 .805.54 1.748 2.06 1.451C51.415 54.94 60 43.606 60 30.247 60 13.542 46.568 0 30 0"/><path d="M11.451 43.22c-.066.15-.3.194-.513.092-.217-.098-.34-.301-.269-.45.065-.153.3-.196.516-.093.217.097.341.302.266.451M12.664 44.573c-.143.133-.422.071-.611-.138-.196-.209-.233-.488-.088-.623.147-.132.418-.07.614.139.196.211.234.488.085.622M13.845 46.298c-.184.128-.484.008-.67-.258-.183-.267-.183-.586.005-.714.186-.128.481-.013.67.252.182.27.182.59-.005.72M15.462 47.964c-.164.181-.514.133-.77-.114-.261-.242-.334-.584-.17-.765.167-.182.518-.13.776.114.26.241.34.586.164.765M17.694 48.932c-.073.235-.41.341-.749.242-.338-.103-.56-.378-.492-.615.07-.236.409-.347.75-.24.339.102.561.374.49.613M20.144 49.112c.009.247-.279.451-.635.456-.358.008-.648-.192-.652-.435 0-.25.282-.452.64-.458.356-.007.647.191.647.437M22.425 48.723c.042.241-.205.489-.559.555-.347.063-.67-.086-.713-.325-.043-.247.208-.494.556-.558.354-.062.67.083.716.328"/></g></svg>
       </a>
      
        </li>
        <li className="social-icons">
        <a
          className="no-decoration p-2"
          href="https://www.linkedin.com/in/christian-martin-roffey/"
        >
          <svg className="bg-white rounded-circle" width="60" height="60" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="none" fill-rule="evenodd">
              <path
                d="M0 30C0 13.431 13.431 0 30 0c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30z"
                fill="#0077B5"
              />
              <path
                d="M21.2 24.847v20.427h-6.798V24.847h6.799zm.448-6.319c0 1.962-1.476 3.531-3.847 3.531h-.043c-2.282 0-3.758-1.57-3.758-3.53C14 16.525 15.52 15 17.846 15s3.758 1.526 3.802 3.528zM45.72 33.562v11.712h-6.798V34.346c0-2.745-.984-4.618-3.445-4.618-1.879 0-2.997 1.263-3.489 2.482-.18.437-.224 1.046-.224 1.657v11.408h-6.8s.09-18.51 0-20.427h6.8v2.893c.903-1.39 2.519-3.373 6.128-3.373 4.474 0 7.828 2.92 7.828 9.194z"
                fill="#FFF"
              />
            </g>
          </svg>
        </a>
        </li>
        
      </ul>
      </div>
      <hr></hr>  
    </div>
  );
}

export default Social;
