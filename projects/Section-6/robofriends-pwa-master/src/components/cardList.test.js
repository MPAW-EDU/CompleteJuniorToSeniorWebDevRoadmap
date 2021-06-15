import { shallow } from "enzyme";
import React from 'react';
import CardList from './CardList';

test('Expect to render CardList component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'Mad Martigan',
            username: 'Martigan',
            email: 'Iwillfightforyour@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})