import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundary from './/ErrorBoundry';

test('Expect to render card component',() => {
    expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
})