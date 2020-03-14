var initialState = {
    num : 10
}

const reducer2 = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT2":
            return {
                ...state,
                num: state.num + 2
            }
        default:
            return state;
    }
}

export default reducer2;