import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps} />)
})

test('Renders MainPage without crashing',() => {

    expect(wrapper).toMatchSnapshot();
})

test('Filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'johnny@email.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />)

    expect(wrapper2.instance().filterRobots([])).toEqual([])
})

// redux-mock-store