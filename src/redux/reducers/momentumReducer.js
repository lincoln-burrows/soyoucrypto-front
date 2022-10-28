let initialState = {
    momentumData: {},
    momentumIndex: {},
    testData: {},
}

function momentumReducer(state = initialState, action) {
    let {type, payload} = action;
    switch(type){
        case "GET_MOMENTUM_DATA":
            return {
                ...state, 
                momentumData: payload.momentumData,
                momentumIndex: payload.momentumIndex,
                testData: payload.testData,
            };
            case "INITIALIZE_MOMENTUM_DATA":
            return {
                ...state, 
                momentumData: {},
            
                };   
            default:
            return {...state};
    }
    
}

export default momentumReducer;