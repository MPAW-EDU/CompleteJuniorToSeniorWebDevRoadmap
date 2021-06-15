import { shallow } from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

test('Expect to render card component',() => {
    expect(shallow(<SearchBox />)).toMatchSnapshot();
})