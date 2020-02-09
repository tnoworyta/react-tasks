import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('adding a new user', () => {
  const wrapper = mount(<App />);

  wrapper.find('[name="name"]').simulate('change', { target: { name: 'name', value: 'John' } });
  wrapper
    .find('[name="surname"]')
    .simulate('change', { target: { name: 'surname', value: 'Doe' } });
  wrapper
    .find('button')
    .first()
    .simulate('click');

  expect(wrapper.find('.user-list').text()).toEqual('Example name Example surnameJohn Doe');
});
