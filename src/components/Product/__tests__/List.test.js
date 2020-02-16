import React from 'react';
import { mount, shallow } from 'enzyme';
import MockDate from 'mockdate';

import List from '../List';

describe('<List />', () => {
  it('simulates like clicked', () => {
    const props = {
      products: [
        { id: '1', name: 'Milk', price: 10.99 },
        { id: '2', name: 'Bread', price: 9.99 },
      ],
    };
    const wrapper = mount(<List {...props} />);

    wrapper
      .find('button')
      .first()
      .simulate('click');
    expect(
      wrapper
        .find('.like-count')
        .first()
        .text(),
    ).toEqual('1 likes');
  });

  it('should show notice when liked for 2 seconds', () => {
    jest.useFakeTimers();
    const props = {
      products: [
        { id: '1', name: 'Milk', price: 10.99 },
        { id: '2', name: 'Bread', price: 9.99 },
      ],
    };
    const wrapper = mount(<List {...props} />);

    wrapper
      .find('button')
      .first()
      .simulate('click');

    expect(wrapper.find('.notice').text()).toEqual('Product liked!');
    jest.advanceTimersByTime(2000);
    expect(wrapper.find('.notice').text()).toEqual('Waiting for likes');
  });

  it('should show current date', () => {
    MockDate.set('1/15/2020');
    const props = {
      products: [],
    };
    const wrapper = shallow(<List {...props} />);

    expect(wrapper.find('.status').text()).toEqual('State for 15-1-2020');
  });
});
