export const calculateByDays = (amount, porcent, time) => {
	let results = [];

	let money = amount;
	for (let i = 1; i <= time; i++) {
		let interest = (money * porcent) / 100;
		let total = money + interest;

		results.push({ day: i, money, interest, total });
		money += interest;
	}
	console.log(results);

	return results;
};
