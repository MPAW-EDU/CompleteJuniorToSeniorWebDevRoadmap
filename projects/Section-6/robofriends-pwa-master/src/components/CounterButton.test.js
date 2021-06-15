import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

test('Expect to render card component',() => {
    expect(shallow(<CounterButton />)).toMatchSnapshot();
})