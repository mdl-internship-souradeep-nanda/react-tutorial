import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Game from '../game';

configure({ adapter: new Adapter() });

describe('The Game element must have', () => {
  const wrapper = shallow(<Game />);
  it('A div with classname game', () => {
    expect(wrapper.find('.game').length).toBe(1);
  });
  it('A div with classname game-board', () => {
    expect(wrapper.find('.game-board').length).toBe(1);
  });
  it('A div with classname game-info', () => {
    expect(wrapper.find('.game-info').length).toBe(1);
  });
  it('The component Board', () => {
    expect(wrapper.find('Board').length).toBe(1);
  });
});
