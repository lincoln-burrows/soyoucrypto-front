import api from "../api";

function getMomentumGraph(type){
    return async (dispatch) => {
        const momentumDataApi = api.get(`momentum/graph?type=${type}`)
        const momentumIndexApi = api.get(`momentum/index?type=${type}`)

        let [momentumData, momentumIndex,] = await Promise.all([
            momentumDataApi, momentumIndexApi]);
            
        dispatch({
            type:"GET_MOMENTUM_DATA",
            payload: { 
                momentumData : momentumData.data, 
                momentumIndex : momentumIndex.data, 
            },
        })
    };
    
}

export const momentumAction = {
    getMomentumGraph,
}