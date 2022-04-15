import React from "react";
import {
	AmountComponent,
	ButtonsComponents,
	PercentComponent,
	TimeComponent,
} from "./form_components";

const Form = () => {
	return (
		<div className="rounded-md overflow-hidden shadow-lg m-3 pb-7 dark:bg-stone-900 dark:border-stone-700 border">
			<form className="w-11/12 mt-12 m-auto">
				<AmountComponent />
				{/* Percent input */}
				<PercentComponent />
				{/* Time input */}
				<TimeComponent />
				{/* Buttons Calculate and Export */}
				<ButtonsComponents />
			</form>
		</div>
	);
};

export default Form;
