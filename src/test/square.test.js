import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Square from '../square';

configure({ adapter: new Adapter() });

describe('The Square component should have', () => {
  const value = 'X';
  const onClick = jest.fn();
  const wrapper = shallow(<Square
    value={value}
    onClick={onClick}
  />);
  it('A button with className .square', () => {
    expect(wrapper.find('.square').length).toBe(1);
  });
});

