const scrollReducer = (state = true, action) => {
    switch (action.type) {
        case 'SCROLL':
            return state;
        case 'ROUTE':
            return !state;
        default:
            return state
    }
};

export default scrollReducer;