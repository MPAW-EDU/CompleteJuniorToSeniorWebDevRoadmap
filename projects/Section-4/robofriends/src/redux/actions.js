
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
    fetch('http://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then( data => dispatch({ type: REQUEST_ALIENS_SUCCESS, payload: data}) )
    .catch( err => dispatch({type: REQUEST_ALIENS_FAILED, payload: err}) )
}