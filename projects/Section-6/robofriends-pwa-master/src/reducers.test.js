import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';

import * as reducers from './reducers';

describe('search robots', () => {
    const initialStateSearch = {
        searchField: ''
    }

    test('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''})
    })

    test('should handle the CHANGE_SEARCHFIELD event', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCHFIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        })
    })
})