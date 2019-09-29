import React from 'react'
import { shallow, mount } from 'enzyme'

import New from '../New'

describe('<New />', () => {
  test('simulates user added', () => {
    const props = { handleAddUserClick: jest.fn() }
    const wrapper = shallow(<New {...props} />)
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.notice').text()).toEqual('User added!');
  })

  describe('on unmount', () => {
    test('should clear interval when unmounted', () => {
      jest.useFakeTimers();
      const props = { handleAddUserClick: jest.fn() }
      const wrapper = mount(
        <New {...props} />
      );

      wrapper.unmount();
      expect(clearInterval.mock.calls.length).toEqual(1);
    })
  })
})
