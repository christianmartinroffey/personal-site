import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DarkModeSwitch from "./darkModeSwitch";

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		
		<div className="container">
			 <div id='dark-page'>
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
			<p>Curabitur hendrerit ut augue sit amet feugiat. Morbi condimentum nec ligula ut dictum. Morbi in diam vel orci blandit finibus. In lobortis ligula ac ex dictum rutrum. Fusce eros sem, facilisis nec mauris sed, ornare molestie libero. Vestibulum lobortis lacus nibh, vel mollis elit condimentum et. In ac accumsan sapien, ut tincidunt enim. Pellentesque eget risus non nulla dapibus volutpat. Cras tempus dolor quis ipsum egestas consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eget arcu sem. Integer sapien justo, sagittis sit amet elit ac, accumsan gravida sem. Sed auctor ante vel felis eleifend elementum. Nam blandit mi sit amet pharetra hendrerit. Morbi vitae sollicitudin nunc.</p>
		</div>
		</div>
	);
};
