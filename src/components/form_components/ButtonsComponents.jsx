import React, { useContext } from "react";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
import { CalculatorContext } from "../../context/CalculatorContext";
import CalculateButtonComponent from "./CalculateButtonComponent";

export const ButtonsComponents = () => {
	const { state } = useContext(CalculatorContext);

	return (
		<div className="flex flex-col ">
			{/* Calculate Button */}
			<CalculateButtonComponent />

			{/* Export Button only visible when state has some data */}
			{state.length > 1 ? (
				<ReactHtmlTableToExcel
					className="mt-4 bg-green-500 dark:bg-green-800 hover:bg-green-700 hover:dark:bg-green-900 text-white dark:text-neutral-300 font-bold py-2 px-4 rounded w-full text-center animate__animated animate__fadeIn"
					table="result-table"
					filename="result-table"
					sheet="page 1"
					buttonText="Exportar Tabla"
				/>
			) : (
				<></>
			)}
		</div>
	);
};
