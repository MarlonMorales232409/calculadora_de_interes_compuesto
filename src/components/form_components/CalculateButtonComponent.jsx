import React, { useContext } from "react";
import { CalculatorContext } from "../../context/CalculatorContext";
import Swal from "sweetalert2";

const CalculateButtonComponent = () => {
	const {
		state,
		calculateTotal,
		cleanState,
		amount,
		time,
		percent,
		checkInput,
	} = useContext(CalculatorContext);

	const handleCalculate = (e) => {
		e.preventDefault();

		if (state.length > 0) {
			cleanState();
		}

		let isValid = checkInput(amount, percent, time);

		if (isValid.valid) {
			calculateTotal(amount, percent, time);
		} else {
			Swal.fire({
				icon: "error",
				title: "Error...",
				text: `${isValid.message}`,
				// confirmButtonColor: "#007bffb2",
				allowOutsideClick: false,
				allowEscapeKey: false,
				allowEnterKey: false,
				stopKeydownPropagation: false,
				customClass: {
					popup: "shadow-lg m-3 pb-7 dark:!bg-stone-900 dark:!border-stone-700 !border-2",
					confirmButton:
						"mt-7 !bg-blue-500 dark:bg-blue-800 hover:bg-blue-700 hover:dark:bg-blue-900 text-white dark:text-neutral-300 font-bold py-2 px-7 rounded",
				},
			});
			document.querySelector(".form").reset();
		}

		console.log(state);
	};

	return (
		<div className="flex items-end justify-between">
			<button
				onClick={handleCalculate}
				className="mt-7 bg-blue-500 dark:bg-blue-800 hover:bg-blue-700 hover:dark:bg-blue-900 text-white dark:text-neutral-300 font-bold py-2 px-7 rounded"
			>
				Calcular
			</button>
			<h4 className="text-slate-400 text-xl mr-4">
				Total: $
				{state.length > 1
					? state[state.length - 1].total.toFixed(2)
					: "000"}
			</h4>
		</div>
	);
};

export default CalculateButtonComponent;
