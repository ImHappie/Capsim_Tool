import { GET_HISTORY } from "../actions/types";

const initialState = {
    history: [],
    historychart: [0,0,0,0,0,0,0,0,0,0]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HISTORY:
            let total = 0; // max possible points
            let history = action.history;
            let chart = [0,0,0,0,0,0,0,0,0,0];
            for (var i = 0; i < history.length; i++) {
                let p = Math.floor(history[i].point / 10);
                if(p == 10) p = 9;
                chart[9-p]++;
            }
            return {
                ...state,
                history: action.history,
                historychart: chart
            };
        default:
            return state;
    }
};

export default reducer;
