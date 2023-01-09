import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SecondsCounter = (props) => {
	return (
		<>
		<div className="container text-center d-flex bg-black m-auto justify-content-center">
			<div className="row">
				<div className="col fs-1 bg-white mt-2 mb-2">
				<i className="fa fa-clock"></i>
				</div>
				<div className="col">
				<p className="fs-1 text-white">{props.numero6}</p>
				</div>
				<div className="col">
				<p className="fs-1 text-white">{props.numero5}</p>
				</div>
				<div className="col">
				<p className="fs-1 text-white">{props.numero4}</p>
				</div>
				<div className="col">
				<p className="fs-1 text-white">{props.numero3}</p>
				</div>
				<div className="col">
				<p className="fs-1 text-white">{props.numero2}</p>
				</div>
				<div className="col">
				<p className="fs-1 text-white">{props.numero1}</p>
				</div>
			</div>
		</div>
		</>
	)
};

export default SecondsCounter;
