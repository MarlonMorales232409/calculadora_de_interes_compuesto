import React from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import CalculatorProvier from "./context/CalculatorProvier";
import "animate.css";

const Calculator = () => {
	return (
		<CalculatorProvier>
			<div className="flex-col w-screen flex items-start md:flex-row h-screen	 dark:bg-zinc-900 overflow-hidden">
				<div className="w-full lg:w-6/12">
					<Form />
				</div>
				<div className="w-full lg:w-6/12 overflow-y-auto">
					<Results />
				</div>
			</div>
		</CalculatorProvier>
	);
};

export default Calculator;
