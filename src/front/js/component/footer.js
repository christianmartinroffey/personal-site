import React from "react";
import "../../styles/home.css";

export const Footer = () => (
  <footer className="modern-footer">
    <div className="portfolio-container">
      <p>Designed and built by Christian M-R - self-hosted on Raspberry Pi 5</p>
      <div>
        <a href="https://github.com/christianmartinroffey" target="_blank" rel="noreferrer">GitHub</a>
        <span aria-hidden="true"> · </span>
        <a href="https://www.linkedin.com/in/christian-martin-roffey/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  </footer>
);
