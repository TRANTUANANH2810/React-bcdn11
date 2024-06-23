import { useState } from "react";

// const _useState = {defaultValue}

export function State() {
	let result = useState(0);
	let [count, setCount] = result;

	// b1: tao state , xac dinh kieu du lieu

	const [fz, setfz] = useState(16);

	return (
		<>
			<h1>{count}</h1>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				+1
			</button>
			<button
				onClick={() => {
					setCount(count - 1);
				}}
			>
				-1
			</button>
			<button
				onClick={() => {
					setCount(0);
				}}
			>
				RS: 0
			</button>
			<button
				onClick={() => {
					setCount(5);
				}}
			>
				Set 5
			</button>
			<p
				style={{
					fontSize: fz,
				}}
			>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque fugiat
				suscipit quibusdam.
			</p>

			<button
				onClick={() => {
					setfz(fz + 2);
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					setfz(fz - 2);
				}}
			>
				-
			</button>
		</>
	);
}
