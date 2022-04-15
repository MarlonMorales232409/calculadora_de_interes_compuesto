import React from "react";

const TableBody = ({ data }) => {
	return (
		<tbody>
			<tr
				className="bg-white border-b dark:bg-stone-900 dark:text-neutral-400"
				key={data.day}
			>
				<th scope="row">{data.day}</th>
				<td>{data.money.toFixed(2)}</td>
				<td>{data.interest.toFixed(2)}</td>
				<td>{data.total.toFixed(2)}</td>
			</tr>
		</tbody>
	);
};

export default TableBody;
