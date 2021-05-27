import{ GET_TESTS } from './types';
import axios from "axios";

export const getTests = () => dispatch => {
    axios.get('/api/tests')
    .then(res => {
        dispatch({ type: GET_TESTS, tests: res.data.tests })
    })
};

export const addTest = (testData, history) => dispatch => {
    axios.post('/api/tests', testData)
    .then(res => {
        history.push('/');
    })
};
