import axios from 'axios';

import { 
    CHANGE_SEARCHFIELD,
    REQUEST_ALIENS_PENDING,
    REQUEST_ALIENS_SUCCESS,
    REQUEST_ALIENS_FAILED
} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
})

export const requestAliens = () => (dispatch) => {
    dispatch({type: REQUEST_ALIENS_PENDING});
    axios
    .get("http://jsonplaceholder.typicode.com/users")
    .then( data => dispatch({ type: REQUEST_ALIENS_SUCCESS, payload: data.data}) )
    .catch( err => dispatch({type: REQUEST_ALIENS_FAILED, payload: err}) )
}