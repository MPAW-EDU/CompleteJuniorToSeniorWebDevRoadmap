import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

test('Expect to render card component',() => {
    const mockColor = 'red'
    expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();
})

test('Correctly increments the counter', () => {
    const mockColor = 'red'
    const wrapper = shallow(<CounterButton color={mockColor}/>);
    wrapper.find('[id="counter"]').simulate('click')
    expect(wrapper.state()).toEqual({ count: 2 })

    wrapper.find('[id="counter"]').simulate('keypress')
    expect(wrapper.state()).toEqual(({ count: 2 }))
    expect(wrapper.props().color).toEqual('red')

})