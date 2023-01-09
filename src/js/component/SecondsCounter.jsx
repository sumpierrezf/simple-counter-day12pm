import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SecondsCounter = (props) => {
	return (
		<>
		<div className="d-flex">
		<p>Contador: <i class="fa-solid fa-clock"></i> {props.numero6}</p>
		<p>{props.numero5}</p>
		<p>{props.numero4}</p>
		<p>{props.numero3}</p>
		<p>{props.numero2}</p>
		<p>{props.numero1}</p>
		</div>
		</>
	)
};

export default SecondsCounter;
