import React, { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";
import TableBody from "./TableBody";

const Results = () => {
	const { state } = useContext(CalculatorContext);

	return (
		<>
			{state.length > 0 ? (
				<div className="shadow-md sm:rounded-lg m-3 relative animate__animated animate__fadeIn">
					<table
						id="result-table"
						className="border rounded-md w-full text-sm text-center text-gray-700 table-colapse"
					>
						<thead className="text-xs text-white uppercase bg-blue-600 dark:bg-blue-800 dark:text-neutral-200">
							<tr>
								<th scope="col">Tiempo</th>
								<th scope="col">Dinero</th>
								<th scope="col">Interes</th>
								<th scope="col">Total</th>
							</tr>
						</thead>
						{state.map((data) => (
							<TableBody key={data.day} data={data} />
						))}
					</table>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default Results;
