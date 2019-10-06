import React from 'react'
import { mount } from 'enzyme'

import List from '../List'

describe('<List />', () => {
  test('simulates like clicked', () => {
    const props = { products: [{ id: '1', name: 'Milk', price: 10.99 }, { id: '2', name: 'Bread', price: 9.99 }] }
    const wrapper = mount(<List {...props} />)

    wrapper.find('button').first().simulate('click');
    expect(wrapper.find('.like-count').first().text()).toEqual('1 likes');
  })
})
