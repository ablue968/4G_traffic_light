import React, { useState } from "react";

//create your first component
export function Home() {
	/*creando la constante*/
	const [color, setColor] = useState(null);

	return (
		<div className="container">
			<div className="container-fluid d-flex justify-content-center flex-column">
				<div className="rope" />
				<div className="trafficLight">
					<div
						className={
							"red light " + ("red" == color ? "selected" : "")
						}
						onClick={() => setColor("red")}
					/>
					<div
						className={
							"yellow light " +
							("yellow" == color ? "selected" : "")
						}
						onClick={() => setColor("yellow")}
					/>
					<div
						className={
							"green light " +
							("green" == color ? "selected" : "")
						}
						onClick={() => setColor("green")}
					/>
				</div>
			</div>
		</div>
	);
}
