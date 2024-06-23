import "./change-color.css";

import { useState } from "react";

export function ChangeColor() {
	const [bgc, setBgc] = useState("blue");
	return (
		<>
			<div
				className="box"
				style={{
					width: 100,
					height: 100,
					backgroundColor: bgc,
				}}
			/>

			<br />
			<button
				onClick={() => {
					setBgc("red");
				}}
			>
				red
			</button>
			<button
				onClick={() => {
					setBgc("blue");
				}}
			>
				blue
			</button>
			<button
				onClick={() => {
					setBgc("green");
				}}
			>
				green
			</button>
		</>
	);
}
