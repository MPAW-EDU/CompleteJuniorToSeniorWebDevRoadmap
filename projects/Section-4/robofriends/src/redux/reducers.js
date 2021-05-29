
import { 
    CHANGE_SEARCHFIELD,
    REQUEST_ALIENS_PENDING,
    REQUEST_ALIENS_SUCCESS,
    REQUEST_ALIENS_FAILED
} from './constants';

const initialStateSearch = {
    searchField: ''
}

const initialStateAliens = {
    isPending: false,
    aliens: [],
    error: ''
}

export const searchAliens = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCHFIELD:
            return {...state, searchField: action.payload}
        default:
            return state;
    }
}


export const requestAliens = (state=initialStateAliens, action={}) => {
    switch(action.type) {
        case REQUEST_ALIENS_PENDING:
            return Object.assign({}, state, { isPending: true})

        case REQUEST_ALIENS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false })

        case REQUEST_ALIENS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })

        default:
            return state;
    }
}