import api from "../api";

function getStableGraph(type){
    return async (dispatch) => {
        const stableDataApi = api.get(`stable/graph?type=${type}`)
        const stableIndexApi = api.get(`stable/index?type=${type}`)

        let [stableData, stableIndex,] = await Promise.all([
            stableDataApi, stableIndexApi]);
            
        dispatch({
            type:"GET_STABLE_DATA",
            payload: { 
                stableData : stableData.data, 
                stableIndex : stableIndex.data, 
            }
        })
        console.log("우리가 promiseAll 후에 받는 데이터는?", stableIndex)
    };
    
}

export const stableAction = {
    getStableGraph,
}