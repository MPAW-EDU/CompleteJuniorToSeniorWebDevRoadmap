import { shallow } from 'enzyme';
import React from 'react';
import Scroll from './Scroll';

test('Expect to render card component',() => {
    expect(shallow(<Scroll />)).toMatchSnapshot();
})