import React, { useReducer, useState } from "react";
import { CalculatorContext } from "./CalculatorContext";
import { calculatorReducer } from "./calculatorReducer";

const INITIAL_STATE = [];

const CalculatorProvier = ({ children }) => {
	// Form components state
	const [amount, setAmount] = useState(0);
	const [time, setTime] = useState(0);
	const [percent, setPercent] = useState(0);

	// Results state
	const [state, dispatch] = useReducer(calculatorReducer, INITIAL_STATE);

	// Clean the table before load new results
	const cleanState = () => {
		dispatch({ type: "clean" });
	};

	// Check input fields

	const checkInput = (amount, percent, time) => {
		let message = "";

		if (amount === 0 || percent === 0 || time === 0) {
			message =
				"Los campos no pueden estar vacios ni contener datos que no sean numeros maoyores a 0";
			return { valid: false, message };
		} else if (!Number(amount) || !Number(percent) || !Number(time)) {
			message = "Los datos introducidos no pueden ser 0 o texto";
			return { valid: false, message };
		} else if (amount < 1 || percent < 1 || time < 1) {
			message = "Todos los datos introducidos tienen que ser mayor a 0";
			return { valid: false, message };
		} else {
			return { valid: true };
		}
	};

	// Calculate the interest

	const calculateTotal = (amount, percent, time) => {
		let results = [];
		amount = Number(amount);
		percent = Number(percent);
		time = Number(time);

		let money = amount;
		for (let i = 1; i <= time; i++) {
			let interest = (money * percent) / 100;
			let total = money + interest;

			results.push({ day: i, money, interest, total });
			money += interest;
		}

		dispatch({ type: "calculate", payload: results });
	};

	return (
		<CalculatorContext.Provider
			value={{
				state,
				calculateTotal,
				cleanState,
				amount,
				setAmount,
				time,
				setTime,
				percent,
				setPercent,
				checkInput,
			}}
		>
			{children}
		</CalculatorContext.Provider>
	);
};

export default CalculatorProvier;
