import style from "./index.module.css";

export function Module() {
	return (
		<>
			<p className={style.module + " " + style.sub}>Module</p>
		</>
	);
}
