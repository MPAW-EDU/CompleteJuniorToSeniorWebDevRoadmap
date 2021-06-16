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

test('Filters robots correctly when no match', () => {
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

test('Filters robots correctly and has a match', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'johnny@email.com'
        }],
        searchField: 'john',
        isPending: false
    }
    const wrapper3 = shallow(<MainPage {...mockProps2} />)

    expect(wrapper3.instance().filterRobots([])).toEqual([{
        id: 3,
        name: 'John',
        email: 'johnny@email.com'
    }])
})

// redux-mock-store