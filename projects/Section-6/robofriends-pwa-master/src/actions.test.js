import * as actions from './actions';
import { CHANGE_SEARCHFIELD, REQUEST_ROBOTS_PENDING } from './constants';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

test('should create an action to search robots', () => {
    const text ='Wowza';
    const expectedAction = {
        type: CHANGE_SEARCHFIELD,
        payload: text
    }

    expect(actions.setSearchField(text)).toEqual(expectedAction);
})

// redux-mock-store is used
test('Handles requesting robots API', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots())
    const action = store.getActions();
    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING
    }
    expect(action[0]).toEqual(expectedAction)
})