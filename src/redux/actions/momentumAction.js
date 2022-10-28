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
        localStorage.setItem("momentumData", JSON.stringify(momentumData.data))
        localStorage.setItem("momentumIndex", JSON.stringify(momentumIndex.data))
        console.log("우리가 promiseAll 후에 받는 데이터는?", momentumIndex)
    };
    
}

export const momentumAction = {
    getMomentumGraph,
}