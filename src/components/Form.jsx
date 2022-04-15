import React, { useContext, useState } from "react";
import {
	CurrencyDollarIcon,
	ChartPieIcon,
	CalendarIcon,
} from "@heroicons/react/solid";
import { CalculatorContext } from "../context/CalculatorContext";
import reactHtmlTableToExcel from "react-html-table-to-excel";
import ReactHtmlTableToExcel from "react-html-table-to-excel";

const Form = () => {
	const [amount, setAmount] = useState(0);
	const [time, setTime] = useState(0);
	const [porcent, setPorcent] = useState(0);

	const { state, calculateTotal, cleanState } = useContext(CalculatorContext);

	const handleCalculate = (e) => {
		e.preventDefault();

		if (state.length > 0) {
			cleanState();
		}

		calculateTotal(amount, porcent, time);
	};

	const handleExport = () => {};

	return (
		<div className="rounded-md overflow-hidden shadow-lg m-3 pb-7 dark:bg-stone-900 dark:border-stone-700 border">
			<form className="w-11/12 mt-12 m-auto">
				<label className="relative w-full flex items-center justify-start">
					<span className="absolute inset-y-0 left-0 flex items-center pl-2">
						<CurrencyDollarIcon className="h-5 w-5 fill-slate-400 dark:fill-neutral-300" />
					</span>
					<input
						type="text"
						placeholder="Introduce el monto"
						onChange={(e) => setAmount(Number(e.target.value))}
						className="w-full border-2 border-gray-400 rounded-md py-2 pl-9 pr-3 shadow-sm text-gray-400 dark:bg-neutral-700 dark:border-neutral-500 dark:text-neutral-400 outline-0"
					/>
				</label>
				{/* Porcent input */}
				<div className="mt-7">
					<label className="relative w-full flex items-center justify-start">
						<span className="absolute inset-y-0 left-0 flex items-center pl-2">
							<ChartPieIcon className="h-5 w-5 fill-slate-400 dark:fill-neutral-300" />
						</span>
						<input
							type="text"
							placeholder="Introduce el %"
							onChange={(e) => setPorcent(Number(e.target.value))}
							className="w-full border-2 border-gray-400 rounded-md py-2 pl-9 pr-3 shadow-sm text-gray-400 dark:bg-neutral-700 dark:border-neutral-500 dark:text-neutral-400 outline-0"
						/>
						{/* <select
							id="porcentSelector"
							className="text-slate-400 py-2 pl-9 pr-3 absolute right-1  outline-none cursor-pointer bg-transparent"
						>
							<option value="day">Dia</option>
							<option value="month">Mes</option>
							<option value="year">Año</option>
						</select> */}
					</label>
				</div>
				{/* Time input */}
				<div className="mt-7">
					<label className="relative w-full flex items-center justify-start">
						<span className="absolute inset-y-0 left-0 flex items-center pl-2">
							<CalendarIcon className="h-5 w-5 fill-slate-400 dark:fill-neutral-300" />
						</span>
						<input
							type="text"
							placeholder="Introduce los ciclos"
							onChange={(e) => setTime(Number(e.target.value))}
							className="w-full border-2 border-gray-400 rounded-md py-2 pl-9 pr-3 shadow-sm text-gray-400 dark:bg-neutral-700 dark:border-neutral-500 dark:text-neutral-400 outline-0"
						/>
						{/* <select
							id="timeSelector"
							className="text-slate-400 py-2 pl-9 pr-3 absolute right-1  outline-none cursor-pointer  bg-transparent"
						>
							<option value="day">Dia</option>
							<option value="month">Mes</option>
							<option value="year">Año</option>
						</select> */}
					</label>
				</div>
				<div className="flex flex-col ">
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
					{state.length > 1 ? (
						<ReactHtmlTableToExcel
							onClick={handleExport}
							className="mt-4 bg-green-500 dark:bg-green-800 hover:bg-green-700 hover:dark:bg-green-900 text-white dark:text-neutral-300 font-bold py-2 px-4 rounded w-full text-center"
							table="result-table"
							filename="result-table"
							sheet="page 1"
							buttonText="Exportar Tabla"
						/>
					) : (
						<></>
					)}
				</div>
			</form>
		</div>
	);
};

export default Form;
