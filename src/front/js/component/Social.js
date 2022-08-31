import React from "react";
import "../../styles/home.css"
import GitHubLogo from "../../img/GitHubLogo.svg"

function Social() {
  return (
    <div className="container pt-5">
      <hr></hr>
      <h3 className="social-text">
        Social<span className="text-danger social-text">.</span>
      </h3>
      <ul className="icon-wrapper container d-flex p-3 m-4">
        <li className="social-icons">
        <svg src={GitHubLogo}></svg>
        </li>
        <li className="social-icons">
        <span
          className=""
          href="https://www.linkedin.com/in/christian-martin-roffey/"
        >
          <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
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
        </span>
        </li>
      </ul>
    </div>
  );
}

export default Social;
