export const calculatorReducer = (state, action) => {
	switch (action.type) {
		case "calculate":
			return [...state, ...action.payload];

		case "clean":
			return [];

		default:
			return { ...state };
	}
};
