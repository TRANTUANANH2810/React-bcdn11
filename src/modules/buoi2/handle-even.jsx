export function HandleEven() {
	const hdEvent = () => {
		console.log("handleEven");
	};

	const handleName = (name) => {
		return () => {
			console.log("My Name is" + name);
		};
	};
	return (
		<>
			<button
				onClick={() => {
					console.log("Click me!");
				}}
			>
				Click me
			</button>

			<button onClick={hdEvent}>Click me 2</button>
			<button onClick={handleName("soft")}>Click me 3</button>
			<button onClick={handleName("soft")}>Click me 3</button>
		</>
	);
}
