import { GET_TESTS } from "../actions/types";

const initialState = {
    tests: [],
    topmark: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TESTS:
            let total = 0; // max possible points

            for (var i = action.tests.length - 1; i >= 0; i--) {
                if(action.tests[i].type != 'single'){
                    for(var j = action.tests[i].answer.length - 1; j >= 0; j--){
                        total += action.tests[i].answer[j].mark;
                    }
                } else {
                    let max = action.tests[i].answer[0].mark;
                    for(var j = 0; j < action.tests[i].answer.length; j++){
                        // total += action.tests[i].answer[j].mark;
                        if(max < action.tests[i].answer[j].mark) {
                            max = action.tests[i].answer[j].mark;
                        }
                    }
                    total += max;
                }
            }

            return {
                ...state,
                tests: action.tests,
                topmark: total
            };
        default:
            return state;
    }
};

export default reducer;
