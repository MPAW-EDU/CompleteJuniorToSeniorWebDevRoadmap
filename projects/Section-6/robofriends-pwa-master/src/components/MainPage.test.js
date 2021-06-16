import { shallow } from 'enzyme';
import React from 'react';
import App from '../containers/App';

test('Expect to render mainpage component',() => {
    const moctStore = {
        robots: [],
        searchField: ''
    }
    expect(shallow(<App store={moctStore}/>)).toMatchSnapshot();
})

// redux-mock-store