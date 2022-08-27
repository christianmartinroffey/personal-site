import React, { Component } from "react";
import BackToTop from "../component/BackToTop";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div id='dark-page' className="container d-flex">
		<p>
			Website design, animation and code by Christian M-R
		</p>
		<BackToTop></BackToTop>
		</div>
	</footer>
);
