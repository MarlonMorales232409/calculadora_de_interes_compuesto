import React, { useContext } from "react";
import { ChartPieIcon } from "@heroicons/react/solid";
import { CalculatorContext } from "../../context/CalculatorContext";

export const PercentComponent = () => {
	const { setPercent } = useContext(CalculatorContext);

	return (
		<div className="mt-7">
			<label className="relative w-full flex items-center justify-start">
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<ChartPieIcon className="h-5 w-5 fill-slate-400 dark:fill-neutral-300" />
				</span>
				<input
					type="number"
					placeholder="Introduce el %"
					onChange={(e) => setPercent(e.target.value)}
					className="w-full border-2 border-gray-400 rounded-md py-2 pl-9 pr-3 shadow-sm text-gray-400 dark:bg-neutral-700 dark:border-neutral-500 dark:text-neutral-400 outline-0"
				/>
			</label>
		</div>
	);
};
