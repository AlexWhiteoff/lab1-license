const productsReducer = (state, action) => {
	switch (action.type) {
		case "POPULATE":
			return action.products;
		case "ADD":
			const id =
				state.length > 0 ? state[state.length - 1].id + 1 : 0;
                
			return [...state, { id: id, name: action.name }];
		case "REMOVE":
			return state.filter((product) => product.id !== action.id);
		default:
			return state;
	}
};

export default productsReducer;
