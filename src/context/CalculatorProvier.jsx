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

	// Calculate the interest

	const calculateTotal = (amount, porcent, time) => {
		let results = [];

		let money = amount;
		for (let i = 1; i <= time; i++) {
			let interest = (money * porcent) / 100;
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
			}}
		>
			{children}
		</CalculatorContext.Provider>
	);
};

export default CalculatorProvier;
