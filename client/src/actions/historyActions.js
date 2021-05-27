import{ GET_HISTORY } from './types';
import axios from "axios";

export const addHistory = (historydata, history) => dispatch => {
    axios.post('/api/history', historydata)
    .then(res => {
        history.push('/history');
    })
}

export const getHistory = () => dispatch => {
    axios.get('/api/history')
    .then(res => {
        dispatch({ type: GET_HISTORY, history: res.data.history })
    })
}