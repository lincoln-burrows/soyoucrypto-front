let initialState = {
    stableData: {},
    stableIndex: {},
}

function stableReducer(state = initialState, action) {
    let {type, payload} = action;
    switch(type){
        case "GET_STABLE_DATA":
            return {
                ...state, 
                stableData: payload.stableData,
                stableIndex: payload.stableIndex,
            };
            default:
            return {...state};
    }
    
}

export default stableReducer;