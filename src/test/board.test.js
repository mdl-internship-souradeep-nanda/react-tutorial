import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Board from '../board';

configure({ adapter: new Adapter() });

describe('Board should have components:', () => {
  const propSquares = ['X', 'X', 'X',
    'X', 'X', 'X',
    'X', 'X', 'X'];
  const mockFunction = jest.fn();
  const wrapper = shallow(<Board
    squares={propSquares}
    onClick={mockFunction}
  />);
  it('Three divs with classname board-row', () => {
    expect(wrapper.find('.board-row').length).toBe(3);
  });
  it('Nine Squares', () => {
    expect(wrapper.find('Square').length).toBe(9);
  });
});

