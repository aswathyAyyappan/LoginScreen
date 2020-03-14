var initialState = {
    num : 5
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                num: state.num + 1
            }
        default:
            return state;
    }
}

export default reducer;