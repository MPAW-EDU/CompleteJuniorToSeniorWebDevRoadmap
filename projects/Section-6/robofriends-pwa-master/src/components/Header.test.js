import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

test('Expect to render card component',() => {
    expect(shallow(<Header />)).toMatchSnapshot();
})