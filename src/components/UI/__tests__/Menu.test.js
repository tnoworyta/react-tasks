import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Menu from '../Menu'

describe('<Menu />', () => {
  test('renders component', () => {
    const wrapper = shallow(<Menu />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  test('renders with correct elements', () => {
    const wrapper = shallow(<Menu />)
    expect(wrapper.find('.title')).toHaveLength(1);
    expect(wrapper.find('li')).toHaveLength(3);
    expect(wrapper.find('.title').text()).toEqual('Some test app');
  })
})
