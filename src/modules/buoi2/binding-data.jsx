export function BindingData() {
	const name = " Tran tuan anh";
	const number = 38;

	const bool = true;

	const pro = {
		name: " Samsung",
	};

	const arr = [1, 2, 3];

	const sayHi = (name) => {
		return `Hi my name is ${name}`;
	};

	const result = number % 2 === 0 ? "chan" : "le";

	const renderName = (name) => {
		return (
			<>
				<p>TRantuananh</p>
			</>
		);
	};
	return (
		<>
			{renderName()}
			<h1> {name}</h1>
			<p>{number}</p>

			{/* kieu du lieu khong binding duoc */}
			{/* boolean */}
			<p>{bool}</p>

			<p>{JSON.stringify(pro)}</p>

			<p>{arr}</p>

			<>{sayHi("Anh")}</>
			<br />

			<>{result}</>
		</>
	);
}
