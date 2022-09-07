import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Llama from "../../img/llama80.svg";
import "../../styles/home.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const darkOnClick = () => {
    actions.turnOnDarkMode();
  };

  return (
    <nav className="navbar navbar-light bg-light p-4">
      <div className="container">
        <Link to="/" className="no-decoration">
			<div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            width="40px"
            height="40px"
          >
            <polygon
              fill="#b3add8"
              points="65.467,34.253 67.479,28.719 64.586,16.401 57.626,2.382 54.037,1.011 50.588,0.571 52.859,13.65 41.555,2.51 36.922,2.51 34.653,4.153 45.232,23.055 34.46,26.624 18.189,37.326 14.619,49.67 20.175,51.295 10.5,53.644 10.5,56.468 8.857,57.182 14.271,62.829 22.955,65.474 32.838,60.532 28.621,73.709 43.956,79.459 71.5,63.72 71.5,50.221"
            />
            <polygon
              fill="#8b75a1"
              points="34.692,54.011 24.98,52.19 21.137,51.061 10.5,53.644 10.5,54.913 20,57.51 30,55.242 29.992,55.809"
            />
            <polygon
              fill="#dcd5f2"
              points="60.5,24.01 60.24,21.77 53.667,0.963 50.588,0.571 52.859,13.65 53.619,15.101 54,17.297 54,24.01 52.5,24.01 50.24,18.51 37.08,3.01 36.922,2.51 34.653,4.153 45.232,23.055 34.46,26.624 18.189,37.326 14.619,49.67 20.175,51.295 22.11,51.34 24.98,52.19 28.86,39.47 36.74,34.25 42,31.01 62.5,24.01"
            />
            <polygon
              fill="#978fbf"
              points="46,62.01 43.82,77.81 43.956,79.459 28.621,73.709 32.838,60.532 33.676,59.554 37.359,58.894"
            />
            <polygon
              fill="#dcd5f2"
              points="20,59.629 20,59.104 10.972,56.262 8.857,57.182 14.271,62.829 22.955,65.474 22.91,64.937"
            />
            <polygon
              fill="#f2faff"
              points="20,56.51 10.5,53.913 10.5,56.638 20,59.629 21,59.247 21,56.283"
            />
            <polygon
              fill="#e1ebf2"
              points="30,54.242 20,56.51 20,59.629 30,55.805"
            />
            <polygon
              fill="#978fbf"
              points="54,64.33 54,73.719 52,74.862 52,65.47"
            />
            <polygon
              fill="#978fbf"
              points="60,60.91 60,70.291 58,71.434 58,62.05"
            />
            <polygon
              fill="#978fbf"
              points="66,66.863 66,57.47 64,58.63 64,68.005"
            />
            <path
              fill="#8b75a1"
              d="M66,34.25l2-5.5l-2.94-12.52L58,2.01l-3.92-1.5l-4.1-0.52L52.1,12.2L41.76,2.01h-5l-2.76,2	l10.5,18.76l-10.26,3.4l-7.72,5.08l-3.44,2.26l-5.32,3.5l-3.76,13l4.24,1.24l-8.24,2v2.89l-2,0.87l6,6.26l9,2.74l9-4.5l-4,12.5l16,6	l28-16V50.13L66,34.25z M71,63.43L43.91,78.91l-14.67-5.5l3.71-11.6l0.73-2.26l-2.13,1.07l-8.64,4.32l-8.37-2.55l-4.82-5.04	l0.68-0.29L11,56.8v-2.76l7.48-1.82l3.63-0.88l-3.59-1.05l-3.28-0.96l3.38-11.69l5.69-3.74l3.47-2.28l6.9-4.54l10.13-3.36l1.15-0.38	l-0.59-1.06L35.31,4.3l1.77-1.29h4.27l10.05,9.9l2.22,2.19l-0.53-3.07L51.2,1.15l2.63,0.34l3.45,1.31l6.83,13.77l2.85,12.12	l-1.9,5.22l-0.13,0.35l0.13,0.34L71,50.31V63.43z"
            />
            <polygon
              fill="#495866"
              points="69.19,42.68 68.32,43.23 41.22,60.29 46,62.01 69.77,47.05 70.63,46.5"
            />
            <polygon
              fill="#495866"
              points="41.74,60.47 37.36,58.89 33.12,36.65 24.31,33.9 23.08,33.51 26.52,31.25 27.78,31.62 36.74,34.25"
            />
            <path
              fill="#b6c9d6"
              d="M36.083,60.004c0,0-0.279,0.002-1.628,0.012s-2.453-1.325-2.465-2.982	c-0.012-1.657,1.071-3.008,2.42-3.018s1.628-0.012,1.628-0.012L36.083,60.004z"
            />
            <ellipse
              cx="35.987"
              cy="57.007"
              fill="#8096b0"
              rx="2"
              ry="3"
              transform="matrix(1 -.0074 .0074 1 -.42 .268)"
            />
            <path
              fill="#fff"
              d="M58,40c0,3.314-2.686,6-6,6s-6-2.686-6-6c0-4,2.686-10,6-10C55.314,30,58,36,58,40z"
            />
            <polygon
              fill="#8b75a1"
              points="23.276,42.577 21.52,48.31 23.42,48.87 25.769,41.231"
            />
            <polygon
              fill="#8b75a1"
              points="21.591,42.079 20.214,39.585 17.98,47.27 19.92,47.85"
            />
            <circle cx="52.5" cy="38.5" r="1.5" fill="#495866" />
          </svg>
		  </div>
        </Link>
        <Link to="/wip">
          <span className="navbar-brand mb-0 h1">Work In Progress</span>
        </Link>
        <Link to="/contact">
          <span className="navbar-brand mb-0 h1">Contact</span>
        </Link>
        <div id="">
          {/* <Link to="/time">
					<span className="navbar-brand mb-0 h1">Time To Waste?</span>
				</Link> */}
          <svg
            onClick={darkOnClick}
            id="dark_mode"
            width="25"
            height="25"
            viewBox="0 0 55 55"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="moon"
              d="M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 52.101 13.21 55 20.209 55 27.5 C 55 34.791 52.101 41.79 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z"
              fill="#fee140"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};
