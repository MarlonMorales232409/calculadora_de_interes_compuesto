import React, { useReducer } from "react";
import { CalculatorContext } from "./CalculatorContext";
import { calculatorReducer } from "./calculatorReducer";

const INITIAL_STATE = [];

const CalculatorProvier = ({ children }) => {
	const [state, dispatch] = useReducer(calculatorReducer, INITIAL_STATE);

	const cleanState = () => {
		dispatch({ type: "clean" });
	};

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
			value={{ state, calculateTotal, cleanState }}
		>
			{children}
		</CalculatorContext.Provider>
	);
};

export default CalculatorProvier;
